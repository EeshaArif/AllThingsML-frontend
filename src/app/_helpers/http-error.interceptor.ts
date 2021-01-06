import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, throwError } from 'rxjs';

import { retry, catchError, finalize } from 'rxjs/operators';
import { LoadingDialogService } from './loading-dialog/loading-dialog.service';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private loadingDialogService: LoadingDialogService,
    private sb: MatSnackBar
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingDialogService.openDialog();
    return next
      .handle(request)

      .pipe(
        retry(1),

        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // client-side error

            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error

            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }

          // window.alert(errorMessage);
          this.sb.open(errorMessage, 'close', { duration: 5000 });
          return throwError(errorMessage);
        }),
        finalize(() => {
          this.loadingDialogService.hideDialog();
        })
      );
  }
}
