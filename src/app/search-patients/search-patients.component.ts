import { Component, OnInit } from '@angular/core';
import {Patient} from '../models/patient';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {PatientService} from '../services/patient.service'; 
@Component({
  selector: 'app-search-patients',
  templateUrl: './search-patients.component.html',
  styleUrls: ['./search-patients.component.css']
})
export class SearchPatientsComponent implements OnInit {

  
   private patient :Patient =new Patient();
   private user :User =new User() ;
   
   private patientID:number =0;
   private notfound_Patient: boolean = false;
  constructor( private _router: Router,
     private patient_service:PatientService  )     {
   
   }

  ngOnInit() {
  
    this.notfound_Patient=false; 
  this.user= JSON.parse(localStorage.getItem('currentUser')) ;
    
    
  }



   

   ongetPatient() {

    this.patient_service.getPatient_by_patientId(this.patientID).subscribe(
      res => {
        this.patient= res.json(); 


      },
      err => {
        this.notfound_Patient=true; 
       

        
      }
    );
  }   
}
