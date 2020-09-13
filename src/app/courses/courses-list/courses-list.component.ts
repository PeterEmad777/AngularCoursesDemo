import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/modules/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {

  @Input() courses:Course[];
  @Output()editEvent = new EventEmitter<Course>()
  

  constructor() { }

  ngOnInit(): void { }

  onEdit(course : Course): void {
    this.editEvent.emit({...course});
  }
}
