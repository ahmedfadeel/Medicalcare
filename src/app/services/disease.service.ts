import {Injectable} from '@angular/core';
import {Disease} from '../models/disease';
import {AppConst} from '../constants/app-const';
import {Http, Headers} from '@angular/http';
@Injectable()
export class DiseaseService {

  private serverPath: string = AppConst.serverPath;
   
    constructor(private http:Http) {
        
    }
    addDisease(disease:Disease) {
  	let url = AppConst.serverPath+"/disease/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(disease), {headers: headers});
  }


  getDisease_by_PatientId(patient_id :number) {
  	let url = AppConst.serverPath+"/disease/patientID/"+patient_id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }


   getDisease_by_DiseaseId(DiseaseId :number) {
  	let url = AppConst.serverPath+"/disease/diseaseID/"+DiseaseId;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }

   deleteDisease_by_DiseaseId(DiseaseId :number) {
  	let url = AppConst.serverPath+"/disease/diseases/diseaseID/"+DiseaseId;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.delete(url, {headers: tokenHeader});
  }


 

  




}
