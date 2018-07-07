import {Injectable} from '@angular/core';
import {Patient} from '../models/patient';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
@Injectable()
export class PatientService {
    
   
 private serverPath: string = AppConst.serverPath;
   
    constructor(private http:Http) {
        
    }
  addPatient(patient:Patient) {
    let url = AppConst.serverPath+"/patient/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(patient), {headers: headers});
  }
  removePatient(personalId: number){
    let url = AppConst.serverPath+"/patient/remove";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    

    return this.http.post(url, personalId, {headers: headers});
  }
  updatePatientInfo(patientID:number) {
    let url = AppConst.serverPath+"/patient/update/"+patientID;
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.put(url,  {headers: headers});
  }

  getPatient_by_patientId(patient_id :number) {
    let url = AppConst.serverPath+"/patient/patientID/"+patient_id;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }


  getPatient_by_doctorId(doctor_id:number) {
    let url = AppConst.serverPath+"/patient/doctorID/"+doctor_id;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }


  getPatient_by_HospitalId(hospital_id :number) {
    let url = AppConst.serverPath+"/patient/hospitalID/"+hospital_id;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  } 


   getPatient_by_DiseaseId(DiseaseId :number) {
    let url = AppConst.serverPath+"/patient/diseaseID/"+DiseaseId;

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.get(url, {headers: tokenHeader});
  }
   
    


  
  
}
