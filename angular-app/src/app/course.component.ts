import { CourseServiceService } from './course-service.service';
import { Component } from '@angular/core';
import { from } from 'rxjs';
@Component({
    selector:'courses',
    template:`
    <div class="form-group col-md-4">
    <input type="text" class="form-control"  placeholder="Enter Keyword for filter result" [(ngModel)]="searchedKeyword">
  </div>
  <br>
    <table border="1" class="table table-striped table-dark">
        <tr>
            <th  scope="col">ID</th>
            <th  scope="col">User Id</th>
            <th  scope="col">Title</th>
        </tr>
        <tr *ngFor="let course of data | paginate: { itemsPerPage: 10, currentPage: p } | filter:searchedKeyword">
            <td scope="row">{{course.id}}</td>
            <td scope="row">{{course.userId}}</td>
            <td scope="row">{{course.title}}</td> 
        </tr> 
   </table>
   <pagination-controls (pageChange)="p = $event"  responsive="true" previousLabel="Previous"
                      nextLabel="Next"
                      screenReaderPaginationLabel="Pagination"
                      screenReaderPageLabel="page"
                      screenReaderCurrentLabel="You're on page"></pagination-controls>`
})
export class CourseComponent{
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