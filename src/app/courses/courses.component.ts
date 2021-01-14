import { CourseService } from './../_services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(public courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses();
  }
}
