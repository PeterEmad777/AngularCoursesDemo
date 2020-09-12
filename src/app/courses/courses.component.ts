import { Component, OnInit } from '@angular/core';
import { Course } from '../modules/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesArr: Course[];
  constructor() { }
   

  ngOnInit(): void {
    this.coursesArr = [
      {
        id:1, 
        title: "Angular",
        instructor: 'Ali',
        availability: true
      },
      {
        id:2, 
        title: "NodeJs",
        instructor: 'Ahmed',
        availability: false
      },
      {
        id:3, 
        title: "JS",
        instructor: 'Mohammed ',
        availability: true
      }
    ];
  }
}