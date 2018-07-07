import {Injectable} from '@angular/core';
import {Diognes} from '../models/diognes';
import {AppConst} from '../constants/app-const';
import {Http, Headers} from '@angular/http';

@Injectable()
export class DiognesService {

 private serverPath: string = AppConst.serverPath;
   
    constructor(private http:Http) {
        
    }

   addDiognese(diognese:Diognes) {
  	let url = AppConst.serverPath+"/diogneses/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(diognese), {headers: headers});
  }

  getDiognese_by_patientId(patient_id :number) {
  	let url = AppConst.serverPath+"/diogneses/patientID/"+patient_id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }


  getDiognese_by_doctorId(doctor_id:number) {
  	let url = AppConst.serverPath+"/diogneses/DoctorID/"+doctor_id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }


  getDiognese_by_patID_and_docID(doctor_id:number,patient_id :number) {
  	let url = AppConst.serverPath+"/diogneses/DoctorID/"+doctor_id+"/PatientID"+patient_id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }
   getDiognese_by_DiseaseId(DiseaseId:number) {
  	let url = AppConst.serverPath+"/diogneses/DiseaseID/"+DiseaseId;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

      
  getDiognese_by_patID_and_DiseID(patientID:number,disesesID :number) {
  	let url = AppConst.serverPath+"/diogneses/PatientID/"+patientID+"/DiseaseID"+disesesID;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }


}
