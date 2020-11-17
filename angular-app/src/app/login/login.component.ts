import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router,
    private route: ActivatedRoute) {

     if(this.service.currentUserValue){
    
       this.router.navigate(['/courses']);
     }


  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // easy access to fields
  get controls() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // break here if form is  not incorrect
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.service.login(
      this.controls.username.value, this.controls.password.value)
      .pipe(first())
      .subscribe({
        next: (data) => {
          console.log(data.token);

          if (data.token && data.token !== null && data.token !== '') {
            this.router.navigate(['/courses'])
          }


        }
      })
  }
}
