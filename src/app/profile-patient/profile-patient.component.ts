import { Component, OnInit } from '@angular/core';

import {Params, ActivatedRoute, Router} from '@angular/router';

import {PatientService} from '../services/patient.service';
import {DoctorService} from '../services/doctor.service';
import {AnalysisService} from '../services/analysis.service';
import {OperationService} from '../services/operation.service';
import {UploadImageService} from '../services/upload-image.service';


import {Patient} from '../models/patient';
import {Diognes} from '../models/diognes';
import {Disease} from '../models/disease';
import {Analysis} from '../models/analysis';
import {Operation} from '../models/operation';
import {User} from '../models/user';
import {Doctor} from '../models/doctor';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
    private patient :Patient =new Patient();
    private user :User =new User();
    private doctor :Doctor =new Doctor();
    private analysis :Analysis =new Analysis();
    private operation :Operation =new Operation();
	

	

   private patient_diognes_List: Diognes[] =[];
   private patient_disease_List: Disease[] =[];
   private patient_Analysis_List: Analysis[] =[];
   private patient_Operation_List: Operation[] =[];
   
    private logged_inDoctor: boolean = false;
    private notfound_Patient: boolean = false;

   
  constructor(private _service:PatientService, private _router: Router,
  private route:ActivatedRoute,
  private  doctor_service:DoctorService,
  private  analysis_service:AnalysisService,
  private  operation_service:OperationService,
  private  uploadImage_service:UploadImageService) {
   }

  ngOnInit() {
  this.user= JSON.parse(localStorage.getItem('currentUser')) 
    if (this.user.tybe === "doctor"){

       this.getCurrentDoctor()

      this.route.queryParams.subscribe(params => {
            this.patient.id=  +params['patientID'];  
              

       });

    this._service.getPatient_by_patientId(this.patient.id).subscribe(
      res => {
        this.patient= res.json(); 
          this.patient_diognes_List=this.patient.dioList;
          this.patient_disease_List=this.patient.diseasesList;
          this.patient_Analysis_List=this.patient.analysises;
          this.patient_Operation_List=this.patient.operations;
      },
      err => {
	    this.notfound_Patient=true;
        console.log(err);
      }
    );
    }
    else if(this.user.tybe === "patient"){
      this.logged_inDoctor=false; 

       this.getCurrentPatient();


     }

  }
   getCurrentDoctor(){
   {

    this.doctor_service.getDoctor_by_doctortId(this.user.hisID).subscribe(
      res => {
        this.doctor= res.json(); 


      },
      err => {
        console.log(err);
      }
    );
  }  


   }
   getCurrentPatient() {

    this._service.getPatient_by_patientId(this.user.hisID).subscribe(
      res => {
        this.patient= res.json(); 
          this.patient_diognes_List=this.patient.dioList;
          this.patient_disease_List=this.patient.diseasesList;
          this.patient_Analysis_List=this.patient.analysises;
          this.patient_Operation_List=this.patient.operations;
      },
      err => {
	    this.notfound_Patient=true; 
        console.log(err);
      }
    );
  }  


onADD_analysis(){

 this.analysis.doctor=this.doctor;
 this.analysis.patient=this.patient;

   this.analysis_service.addAnalysis(this.analysis).subscribe(
      res => {
            this.uploadImage_service.uploadImageAnalysis(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
        
      },
      err => {
        console.log(err);
      }
    );

}



onADD_operation(){
   this.operation.doctor=this.doctor;
   this.operation.patient=this.patient;
     this.operation_service.addOperation(this.operation).subscribe(
      res => {
        
      },
      err => {
        console.log(err);
      }
    );
  
}
}
