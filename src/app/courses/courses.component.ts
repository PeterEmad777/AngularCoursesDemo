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
    this.sortCourses(this.coursesArr);
    this.resetForm();
  }
  onClick() : void{
    const course = {...this.course};
    const courses = [...this.coursesArr];
    if(!course.id){
      courses.push({...course, id: courses.length + 1});
    }else{
      const courseIndex = courses.findIndex(el => +el.id === +this.course.id);
      courses.splice(courseIndex, 1, course);
    }
    this.coursesArr = courses;
    this.sortCourses(this.coursesArr);
    this.resetForm(); 
  }

  resetForm() : void{
    this.course = {
      title: '',
      availability: false
    }
  }

  sortCourses(courses:Course[]) : void{
    courses.sort((a, b) => a.title.localeCompare(b.title));
  }

  onEditEvent(course : Course) : void {
    this.course = course;
  }
}
 