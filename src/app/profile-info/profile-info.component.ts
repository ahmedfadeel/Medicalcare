import { Component, OnInit } from '@angular/core';
import {Doctor} from '../models/doctor';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {DoctorService} from '../services/doctor.service';  
import {UpdateDoctorInfoService} from '../services/update-doctor-info.service';   
import {UploadImageService} from '../services/upload-image.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  
   private doctor :Doctor =new Doctor();
   private user :User =new User();
   private userName: string;
    

  constructor(private _service:DoctorService, private _router: Router,
    private update_service:UpdateDoctorInfoService,
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
        this.getCurrentDoctor();
  
      },error =>{
  
        console.log(error);
      }
    );
  }

 update_personal_information(){
   this.update_service.updatePersonalInfo(this.user.hisID,this.doctor).subscribe(
      res => {
          
           console.log("update successful");
      },
      err => {
        console.log(err);
      }
    );
  }  
 update_communication_information(){
  this.update_service.updateCommunicationInfo(this.doctor.id,this.doctor).subscribe(
      res => {
          
           console.log("update successful");
      },
      err => {
        console.log(err);
      }
    );
  }   
 update_image_andPassword(){
this.update_service.update_userName_andPassword(this.user).subscribe(
      res => {
            this.uploadImageService.modifyImageDoctor(JSON.parse(JSON.parse(JSON.stringify(res))._body).hisID);
           console.log("update successful");
      },
      err => {
        console.log(err);
      }
    );
  }     


  getCurrentDoctor() {

    this._service.getDoctor_by_doctortId(this.user.hisID).subscribe(
      res => {
        this.doctor= res.json(); 


      },
      err => {
        console.log(err);
      }
    );
  }  
}
