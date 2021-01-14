export interface Course {
  id?: number;
  course_name: string;
  course_description: string;
  image: string;
  rating: number;
  instructor: string;
  link: string;
}
export interface CourseResponse {
  courses_list: Course[];
}
