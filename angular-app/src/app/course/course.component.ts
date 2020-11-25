<<<<<<< Updated upstream
import { Component } from '@angular/core';
import { CourseServiceService } from '../course-service.service';
=======
import { Component, OnInit,ViewChild } from '@angular/core';
import { CourseServiceService } from '../services/course-service.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
<<<<<<< Updated upstream
export class CourseComponent {

=======
export class CourseComponent implements OnInit{
>>>>>>> Stashed changes
  data:any
  p:number = 1;
  searchedKeyword:string;
constructor(private service:CourseServiceService){

  this.service.getCourses().subscribe(data=>{
   this.data = data;
   console.log(this.data);
  });
  
}

  
}
