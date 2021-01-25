import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseService } from './../_services/course.service';
import { Component, OnInit } from '@angular/core';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Course } from '../_models/courseModel';

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
  deleteCourse(courseId: number | undefined): void {
    if (courseId !== undefined) {
      this.courseService.deleteCourseWithId(courseId);
    }
  }
  openEditDialog(course: Course): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    if (course.id !== undefined) {
      dialogConfig.data = {
        title: 'Update Course',
        course_name: course.course_name,
        course_description: course.course_description,
        image: course.image,
        rating: course.rating,
        instructor: course.instructor,
        link: course.link,
      };
      // dialogConfig.width = '40%';
      const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

      dialogRef.afterClosed().subscribe((data: any) => {
        const obj = {
          id: course.id,
          course_name: data.course_name,
          course_description: data.course_description,
          image: data.image,
          rating: Number(data.rating),
          instructor: data.instructor,
          link: data.link,
        };

        this.courseService.updateCourse(obj);
      });
    }
  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Add Course',
    };
    // dialogConfig.width = '40%';
    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: any) => {
      const obj = {
        course_name: data.course_name,
        course_description: data.course_description,
        image: data.image,
        rating: Number(data.rating),
        instructor: data.instructor,
        link: data.link,
      };

      this.courseService.postCourse(obj);
    });
  }
}
