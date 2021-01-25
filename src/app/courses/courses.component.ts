import { Course } from './../_models/courseModel';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseService } from './../_services/course.service';
import { Component, OnInit } from '@angular/core';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(public courseService: CourseService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.courseService.getAllCourses();
  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      form_title: 'Add Course',
    };
    dialogConfig.width = '40%';
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: any) => {
      this.courseService.postCourse({
        course_name: data.course_name,
        course_description: data.course_description,
        image: data.image,
        rating: data.rating,
        instructor: data.instructor,
        link: data.link,
      });
    });
  }
}
