import { ToastrService } from "ngx-toastr";

export class AlertService {
  constructor(private alert:ToastrService){}

  showSuccess(message:string){
    this.alert.success(message,'');
  }
  
  showError(message:string){
    this.alert.error(message,'');
  }
}
