import { Component, OnInit } from '@angular/core';
import {Doctor} from '../models/doctor';
import {Patient} from '../models/patient';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {DoctorService} from '../services/doctor.service'; 
import {PatientService} from '../services/patient.service'; 

@Component({
  selector: 'app-search-doctors',
  templateUrl: './search-doctors.component.html',
  styleUrls: ['./search-doctors.component.css']
})
export class SearchDoctorsComponent implements OnInit {

 
   private doctor :Doctor =new Doctor();
   private user :User =new User() ;
   private patient :Patient =new Patient() ;
   private doctorID:number =0;
   private notfound_Doctor: boolean = false;
  constructor(private _service:DoctorService, private _router: Router,
     private patient_service:PatientService  )     {
   
   }

  ngOnInit() {
  
  this.notfound_Doctor=false; 
  this.user= JSON.parse(localStorage.getItem('currentUser')) ;
    
   
  }



   

   ongetDoctor() {

    this._service.getDoctor_by_doctortId(this.doctorID).subscribe(
      res => {
        this.doctor= res.json(); 


      },
      err => {
        this.notfound_Doctor=true;
        
      }
    );
  }   
}
