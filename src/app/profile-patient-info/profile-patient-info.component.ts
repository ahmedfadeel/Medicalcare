import { Component, OnInit } from '@angular/core';
import {Patient} from '../models/patient';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {PatientService} from '../services/patient.service';
import {UpdatePatientInfoService} from '../services/update-patient-info.service'; 
import {UploadImageService} from '../services/upload-image.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-profile-patient-info',
  templateUrl: './profile-patient-info.component.html',
  styleUrls: ['./profile-patient-info.component.css']
})
export class ProfilePatientInfoComponent implements OnInit {
   private patient :Patient = new Patient(); 
   private user :User = new User();
   private userName: string;

  constructor(private _service:PatientService, private _router: Router,
    private update_service:UpdatePatientInfoService,
     private uploadImageService:UploadImageService,
    private userService: UserService) {
   
   }

  ngOnInit() {
  
  this.userName= localStorage.getItem('currentUser');

  this.userService.getUserByUsername(this.userName).subscribe(
    res =>{
      this.user=res.json();
      console.log(this.user.hisID);
      console.log("get user successfully");
      this.getCurrentPatient();

    },error =>{

      console.log(error);
    }
  );

   
    
  }

 update_personal_information(){
   this.update_service.updatePersonalInfo(this.patient).subscribe(
      res => {
          
           console.log("update successful");
           console.log(this.patient.lenth);
      },
      err => {
        console.log(err);
      }
    );
  }  
 update_communication_information(){
  this.update_service.updateCommunicationInfo(this.patient).subscribe(
      res => {
          
           console.log("update successful");
      },
      err => {
        console.log(err);
      }
    );
  }   
 update_image_andPassword(){
  this.update_service.updatepassword(this.user).subscribe(
      res => {
          
          // this.uploadImageService.modifyImagePatient(JSON.parse(JSON.parse(JSON.stringify(res))._body).hisID);
           console.log("update successfully");
      },
      err => {
        console.log(err);
      }
    );
  }   


  getCurrentPatient() {

    this._service.getPatient_by_patientId(this.user.hisID).subscribe(
      res => {
        this.patient= res.json(); 
          
      },
      err => {
        console.log(err);
      }
    );
  }  
}
