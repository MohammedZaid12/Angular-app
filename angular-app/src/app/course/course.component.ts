<<<<<<< HEAD
<<<<<<< Updated upstream
import { Component } from '@angular/core';
import { CourseServiceService } from '../course-service.service';
=======
import { Component, OnInit,ViewChild } from '@angular/core';
import { CourseServiceService } from '../services/course-service.service';
>>>>>>> Stashed changes
=======
import { Component, OnInit,ViewChild } from '@angular/core';
import { CourseServiceService } from '../services/course-service.service';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
>>>>>>> 787bd3de214e95651677fa6169d0c2c06a191a6b

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
<<<<<<< HEAD
<<<<<<< Updated upstream
export class CourseComponent {

=======
export class CourseComponent implements OnInit{
>>>>>>> Stashed changes
=======
export class CourseComponent implements OnInit{
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
>>>>>>> 787bd3de214e95651677fa6169d0c2c06a191a6b
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
