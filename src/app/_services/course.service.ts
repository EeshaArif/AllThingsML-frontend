import { Course, CourseResponse } from './../_models/courseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
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
  constructor(private http: HttpClient) {}

  getAllCourses(): void {
    this.http
      .get<CourseResponse>(`${this.BASE_URL}`)
      .subscribe((courses) => {
        this.courseStore = courses.courses_list;
        this.courseSubject.next(this.courseStore);
      });
  }
}
