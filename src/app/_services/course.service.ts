import { MatSnackBar } from '@angular/material/snack-bar';
import { Course, CourseResponse } from './../_models/courseModel';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  BASE_URL = `${environment.apiUrl}/courses.php`;
  courseStore: Course[] = [];
  courseSubject: Subject<Course[]> = new Subject();
  courses: Observable<Course[]> = this.courseSubject.asObservable();
  constructor(private http: HttpClient, private sb: MatSnackBar) {}

  getAllCourses(): void {
    this.http.get<CourseResponse>(`${this.BASE_URL}`).subscribe((courses) => {
      this.courseStore = courses.courses_list;
      this.courseSubject.next(this.courseStore);
    });
  }

  deleteCourseWithId(cid: number): void {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: cid,
      },
    };
    this.http
      .delete<CourseResponse>(`${this.BASE_URL}`, options)
      .subscribe((res) => {
        this.courseStore = this.courseStore.filter(
          (obj) => obj.id !== res.courses_list[0].id
        );
        this.courseSubject.next(this.courseStore);
        this.sb.open('successfully deleted course!!', 'close', {
          duration: 2000,
        });
      });
  }
  postCourse(course: Course): void {
    this.http
      .post<CourseResponse>(`${this.BASE_URL}`, course)
      .subscribe((res) => {
        this.getAllCourses();
        this.sb.open('successfully posted new course!!', 'close', {
          duration: 2000,
        });
      });
  }
  updateCourse(course: Course): void {
    this.http
      .put<CourseResponse>(`${this.BASE_URL}`, course)
      .subscribe((res) => {
        this.getAllCourses();
        this.sb.open('successfully updated course!!', 'close', {
          duration: 2000,
        });
      });
  }
}
