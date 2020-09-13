import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../modules/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courseSubject = new BehaviorSubject(null);
  constructor() { }

  changeCourseData(course:Course){
    this.courseSubject.next(course);
  }

  get courseSubjectObservable(){
    return this.courseSubject.asObservable();
  }

}
