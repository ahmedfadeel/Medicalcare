import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
import {MedicalAdvice} from '../models/medical-advice';

@Injectable()
export class MedicalAdviceService {

 private serverPath: string = AppConst.serverPath;
   
    constructor(private http:Http) {
        
    }
addMedical_Advice(MedicalAdvice:MedicalAdvice) {
  	let url = AppConst.serverPath+"/medicalAdvice/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(MedicalAdvice), {headers: headers});
  }

  getMedical_Advice_by_DiseaseId(DiseaseId :number) {
  	let url = AppConst.serverPath+"/medicalAdvice/diseasesID/"+DiseaseId;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }


   geMedical_Advice_by_DiognesId(DiognesId :number) {
  	let url = AppConst.serverPath+"/medicalAdvice/diognesID/"+DiognesId;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url, {headers: tokenHeader});
  }


}
