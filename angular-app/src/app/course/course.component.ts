import { Component } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

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
