import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/modules/course.model';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() courses:Course[];

  constructor() { }

  ngOnInit(): void {
  }

}
