import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  private subscription:Subscription;
  messgae:any;

  constructor(private alertServise:AlertService) { }

  ngOnInit(): void {
   this.subscription = this.alertServise.getAlert().subscribe(message =>{
     switch(message && message.type){
       case 'succes':
         message.cssClass = 'alert alert-success';
         break;
         case 'error' :
           message.cssClass = 'alert alert-danger';
           break;
     }
     this.messgae = message;

   }) 
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
