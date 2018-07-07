import {Injectable} from '@angular/core';
import {Patient} from '../models/patient';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
import {User} from '../models/user';
@Injectable()
export class UpdatePatientInfoService {

  private serverPath: string = AppConst.serverPath;
  constructor(private http:Http) { }


updatePersonalInfo(patient: Patient) {
     let url = this.serverPath + "/patient/update/"+patient.id;
   

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.put(url, JSON.stringify(patient), {headers:tokenHeader});
  }

  updateCommunicationInfo(patient: Patient) {
      let url = this.serverPath + "/patient/updateInfo/"+patient.id;
   

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.put(url, JSON.stringify(patient), {headers:tokenHeader});
  }  


  updatepassword(user: User) {
    let url = this.serverPath + "/user/update";
   

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.put(url, JSON.stringify(user), {headers:tokenHeader});

    }
  }