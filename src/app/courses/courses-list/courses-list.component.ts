import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/modules/course.model';
import { CoursesService } from 'src/app/service/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {

  @Input() courses : Course[];
  @Output() editEvent = new EventEmitter<Course>();
  

  constructor(private courseService: CoursesService) {

   }

  ngOnInit(): void { }

  onEdit(course): void {
    this.editEvent.emit({...course});
    this.courseService.changeCourseData({...course});
  }
}
