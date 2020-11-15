import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'' , component:CourseComponent, canActivate:[AuthGuard]},
  {path:'login' , component:LoginComponent},
  {path:'courses' , component:CourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
