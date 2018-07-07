import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
import {Operation} from '../models/operation';

@Injectable()
export class OperationService {

 private serverPath: string = AppConst.serverPath;
   
    constructor(private http:Http) {
        
    }

    addOperation(operation:Operation) {
  	let url = AppConst.serverPath+"/operation/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(operation), {headers: headers});
  }

  getOperation_by_patientId(patient_id :number) {
    let url = AppConst.serverPath+"/operation/patientID/"+patient_id;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }


 getOperation_by_doctorId(doctor_id:number) {
    let url = AppConst.serverPath+"/operation/DoctorID/"+doctor_id;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }
}
