import { Component, OnInit } from '@angular/core';
import { Course } from '../modules/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesArr: Course[];
  course: Course;
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
    this.resetForm();
  }
  onClick() : void{
    const course = {...this.course};
    const courses = {...this.coursesArr};
    if(!course.id){
      courses.push({...course, id: courses.length + 1});
    }else{
      const courseIndex = ccourses.findIndex(el => +el.id === +this.course.id);
      courses.splice(courseIndex, 1, course);
    }
    this.coursesArr = courses;
    this.resetForm();
    
  }

  resetForm() : void{
    this.course = {
      title: '',
      availability: false
    }
  }

  onEditEvent(course : Course) : void {
    console.log(course);
    this.course = course;
  }
}
 