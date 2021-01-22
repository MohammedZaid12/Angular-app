 import { User } from './../models/User';
import { LoginService } from '../services/login.service';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authModel= {} as User;
  loginForm: FormGroup
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router,
    private alert: ToastrService,
    private route: ActivatedRoute,
    private injector: Injector) {



    if (this.service.currentUserValue) {

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
console.log(this.authModel);


    // break here if form is  not incorrect
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.service.login(this.authModel)
      .pipe(first())
      .subscribe({
        next: (data) => {
          console.log(data);


          // if (data && data.token !== null && data.token !== '') {
          //   this.router.navigate(['/courses'])
          // }


        },
        error: error => {
          console.warn(error.error.error);
          this.alert.error(error.error.error, 'Error');
          this.loading = false;
        }
      })
  }
}
