import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  constructor(private data:HttpClient) {}

  getCourses()
  {
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.data.get(url);
  }
}
