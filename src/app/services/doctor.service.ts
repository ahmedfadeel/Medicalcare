import { Injectable } from '@angular/core';
import {Doctor} from '../models/doctor';
import {Report} from '../models/report';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
@Injectable()
export class DoctorService {
   
 
  private serverPath: string = AppConst.serverPath;
   
    constructor(private http:Http) {
        
    }
  
    addDoctor(doctor:Doctor) {
    let url = AppConst.serverPath+"/doctor/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(doctor), {headers: headers});
  }
  removeDoctor(personalId: number){
    let url = AppConst.serverPath+"/doctor/remove";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, personalId, {headers: headers});
  }
  addReport(report:Report , doctorID: number) {
    let url = AppConst.serverPath+"/report/add/"+doctorID;
    
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(report), {headers: headers});
  }  
   updateDoctorInfo(doctorID:number, doctor:Doctor) {
    let url = AppConst.serverPath+"/doctor/update/"+doctorID;
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.put(url, JSON.stringify(doctor),   {headers: headers});
  }

   getDoctor_by_doctorName(doctorName :string) {
    let url = AppConst.serverPath+"/doctor/doctorName/"+doctorName;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }
  getDoctor_by_clinkGovernment_and_clinkCity(clinkGovernment :string,clinkCity :string) {
    let url = AppConst.serverPath+"/doctor/clinkGovernment/"+clinkGovernment+"/clinkCity/"+clinkCity;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }


  getDoctor_by_doctorDepartment(Department_Name:string) {
    let url = AppConst.serverPath+"/doctor/doctorDepartment/"+Department_Name;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }


  getDoctor_by_HospitalId(hospital_id :number) {
    let url = AppConst.serverPath+"/doctor/hospitalID/"+hospital_id;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  } 


   getDoctor_by_patientId(patient_id :number) {
    let url = AppConst.serverPath+"/doctor/patientID/"+patient_id;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }
 getDoctor_by_doctortId(doctor_id :number) {
    let url = AppConst.serverPath+"/doctor/doctorID/"+doctor_id;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }
}
