import { Component, OnInit,ViewChild } from '@angular/core';
import { CourseServiceService } from '../services/course-service.service';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  data:any
  p:number = 1;
  searchedKeyword:string;
constructor(private service:CourseServiceService){

  this.service.getCourses().subscribe(data=>{
   this.data = data;
  });
  
}
  ngOnInit(): void {
  
  }

  
}
