import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
import {Hospital} from '../models/hospital';

@Injectable()
export class HospitalService {

 private serverPath: string = AppConst.serverPath;
   
    constructor(private http:Http) {
        
    }

 addHospital(hospital:Hospital) {
  	let url = AppConst.serverPath+"/hospital/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(hospital), {headers: headers});
  }


  getHospital_by_HospitalId(hospital_id :number) {
  	let url = AppConst.serverPath+"/hospital/hospitalID/"+hospital_id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

 updateHospital(hospital_id :number) {
  	let url = AppConst.serverPath+"/hospital/update/"+hospital_id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url, {headers: tokenHeader});
  }
  
  
}
