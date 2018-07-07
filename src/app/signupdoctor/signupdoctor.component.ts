import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {DoctorService} from '../services/doctor.service';
import {Doctor} from '../models/doctor';


@Component({
  selector: 'app-signupdoctor',
  templateUrl: './signupdoctor.component.html',
  styleUrls: ['./signupdoctor.component.css']
})
export class SignupdoctorComponent implements OnInit {
  doctor :Doctor=new Doctor();
  constructor(private _service:DoctorService, private _router: Router) { 
   this.doctor=new Doctor();
  }
   
  ngOnInit() {
  }
   addDoctor(){

    this._service.addDoctor(this.doctor).subscribe(
      res => {
        
        console.log(res);
        
      }, 
      error => {
        console.log(error.text());
       
      }
    );


   

    
   
}
  
   
}
