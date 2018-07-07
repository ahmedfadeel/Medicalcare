import {Injectable} from '@angular/core';
import {Analysis} from '../models/analysis';
import {AppConst} from '../constants/app-const';
import {Http, Headers} from '@angular/http';
@Injectable()
export class AnalysisService {

  private serverPath: string = AppConst.serverPath;
   
  constructor(private http:Http) { }
  

  addAnalysis(analysis:Analysis) {
  	let url = AppConst.serverPath+"/Analysis/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(analysis), {headers: headers});
  }

  getAnalysis_by_patientId(patient_id :number) {
  	let url = AppConst.serverPath+"/Analysis/patientID/"+patient_id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }


  getAnalysis_by_doctorId(doctor_id:number) {
  	let url = AppConst.serverPath+"/Analysis/DoctorID/"+doctor_id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }


  getAnalysis_by_patID_and_docID(doctor_id:number,patient_id :number) {
  	let url = AppConst.serverPath+"/Analysis/DoctorID/"+doctor_id+"/PatientID"+patient_id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

}
