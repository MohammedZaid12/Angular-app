import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  loading = false;
  submitted = false;
  returnUrl:string;
  constructor(private formBuilder:FormBuilder , private service:LoginService) { 

    
  }

  ngOnInit(): void {
  }

}
