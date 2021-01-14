import { Subject, Observable } from 'rxjs';
import { Article, ArticleResponse } from './../_models/articleModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  BASE_URL = `${environment.apiUrl}/articles.php`;
  private articleStore: Article[] = [];
  private articleSubject: Subject<Article[]> = new Subject();
  articles: Observable<Article[]> = this.articleSubject.asObservable();

  constructor(private http: HttpClient) {}
  getAllArticles(): void {
    this.http
      .get<ArticleResponse>(`${this.BASE_URL}?action=get_articles_list`)
      .subscribe((articles) => {
        this.articleStore = articles.articles_list;
        this.articleSubject.next(this.articleStore);
      });
  }
  getArticleOfId(id: number): Observable<ArticleResponse> {
    return this.http.get<ArticleResponse>(
      `${this.BASE_URL}?action=get_article&id=${id}`
    );
  }
}
