import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css'],
})
export class CourseDialogComponent implements OnInit {
  form: any;
  title = '';
  course_name = '';
  course_description = '';
  image = '';
  rating = 0;
  instructor = '';
  link = '';
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.title = data.title;
    this.course_name = data.course_name;
    this.course_description = data.course_description;
    this.image = data.image;
    if (data.rating !== undefined) {
      this.rating = data.rating.toString();
    }

    this.instructor = data.instructor;
    this.link = data.link;
  }
  save(): void {
    this.dialogRef.close(this.form.value);
  }
  onFileChanged(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        if (event.target !== null) {
          const imageN = event.target.result;
          if (imageN !== null) {
            this.image = imageN.toString();
          }
        }
      };
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      course_name: [this.course_name, Validators.required],
      course_description: [this.course_description, Validators.required],
      image: [this.image],
      rating: [this.rating, Validators.required],
      instructor: [this.instructor, Validators.required],
      link: [
        this.link,
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
    });
  }
}
