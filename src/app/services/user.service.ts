import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { User } from './../models/user';
import {AppConst} from '../constants/app-const';
@Injectable()
export class UserService {
    private serverPath: string = AppConst.serverPath;
    isLoggedin:Boolean;
    constructor(private http:Http) {
        
    }
    getUserByUsername(userName: string) {
      let url = this.serverPath+'/user/userName/'+userName;
      
      let tokenHeader = new Headers({
        'Content-Type' : 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
      });
  
      return this.http.get(url, {headers : tokenHeader});
    }
    logIn(username:string,password:string) {
    let url = this.serverPath+'/token';
    let encodedCredentials = btoa(username+":"+password);
    let basicHeader = "Basic "+encodedCredentials;
    let headers = new Headers ({
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : basicHeader
    });

    return this.http.get(url, {headers: headers});
    
  }

  getCurrentUser() {
    let url = this.serverPath+'/user/getCurrentUser';
    
    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers : tokenHeader});
  }
  addUser(user: User) {
    let url = AppConst.serverPath+"/user/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(user), {headers: headers});
  }
  removeUser(hisId: number){
    let url = AppConst.serverPath+"/user/remove";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, hisId, {headers: headers});
  }
  
    
  
    
  checkSession() {
    let url = AppConst.serverPath+"/checkSession";
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, { headers: headers });
  }

  
  logOut() {
    let url =  AppConst.serverPath+"/user/logout";
    let headers = new Headers({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, '' , { headers: headers });
  } 
}