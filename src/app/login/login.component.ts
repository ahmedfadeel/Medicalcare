import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {Router} from '@angular/router';

import {UserService} from '../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   private user: User ;

   private userType: string;
   private userID: number;

   private credential = {'username': '', 'password' : ''};
  constructor(private _service: UserService, private _router: Router) {

  this.user = new User();
   }
  ngOnInit() {

  }


  onSumit() {
     this.user= new User();
        this._service.logIn(this.credential.username,this.credential.password).subscribe(
      res => {
         localStorage.setItem("xAuthToken", res.json().token);
         localStorage.setItem("currentUser",this.credential.username);
         this.getCurrentUser();
         //location.reload();

        //  if (this.user.tybe === 'doctor') {
        //    this._router.navigate(['/profile-doctor']);
        //  }
        //  else {
        //   this._router.navigate(['/profile-patient']);
        //  }
        //this._router.navigate(['/reciptionist']);
      },
      error => {
        console.log(error);
      }
    );
  }
  getCurrentUser() {
    this._service.getCurrentUser().subscribe(
      res => {
        this.user = res.json();
        //localStorage.setItem('currentUser', JSON.stringify(this.user));
      },
      err => {
        console.log(err);
      }
    );
  }
}
