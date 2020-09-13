import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/modules/course.model';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;
  constructor(private courseService:CoursesService) { }

  ngOnInit(): void {
    this.courseService.courseSubjectObservable.subscribe((course:Course)=>{
      this.course = course;
    });
  }

}
