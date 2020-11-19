export class Alert{
id:string;
message:string;
alertType: AlertType;
keepAfterRouteChange:boolean;
autoclose:boolean;
fade:boolean;

constructor(init?:Partial<Alert>){
Object.assign(this,init);
}

}
export enum AlertType{
    Sucess,Error,Info,Warning
}