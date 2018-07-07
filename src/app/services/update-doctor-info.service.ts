import {Injectable} from '@angular/core';
import {Doctor} from '../models/doctor';
import {User} from '../models/user';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/app-const';
@Injectable()
export class UpdateDoctorInfoService {
 private serverPath: string = AppConst.serverPath;
  constructor(private http:Http) { }
 updatePersonalInfo(doctorId  :number,  doctor: Doctor) {
     let url = this.serverPath + "/doctor/update/"+doctor.id ;
   

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.put(url, JSON.stringify(doctor), {headers:tokenHeader});
  }

  updateCommunicationInfo(doctorId  :number,  doctor: Doctor) {
      let url = this.serverPath + "/doctor/updateContactInfo/"+doctor.id;
   

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.put(url, JSON.stringify(doctor), {headers:tokenHeader});
  }
  update_userName_andPassword(user: User) {
    let url = this.serverPath + "/user/update";
   

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem("xAuthToken")
    });
    return this.http.put(url, JSON.stringify(user), {headers:tokenHeader});
  }
}
