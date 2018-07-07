import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
import {Treatment} from '../models/treatment';

@Injectable()
export class TreatmentService {

 private serverPath: string = AppConst.serverPath;
   
    constructor(private http:Http) {
        
    }


    addTreatment(treatment:Treatment) {
  	let url = AppConst.serverPath+"/treatments/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(treatment), {headers: headers});
  }

   geTreatment_by_DiognesId(DiognesId :number) {
    let url = AppConst.serverPath+"/treatments/diognesID/"+DiognesId;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }

}
