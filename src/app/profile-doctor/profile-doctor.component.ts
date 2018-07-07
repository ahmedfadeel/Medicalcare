import { Component, OnInit } from '@angular/core';
import {Doctor} from '../models/doctor';
import {Report} from '../models/report';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {DoctorService} from '../services/doctor.service';
import {User} from '../models/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-profile-doctor',
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.css']
})
export class ProfileDoctorComponent implements OnInit {

   private doctor :Doctor =new Doctor(); ;
   private user :User =new User();;
   private  report:Report = new Report(); ;
   private  doctorID :number=0; 
   private doctor_reports_List: Report[] = [];
   private notfound_Doctor: boolean = false;
   private userName: string;
   private noReports: boolean;
   private reportAdded: boolean;

  constructor(private _service:DoctorService, private _router: Router,
  private route:ActivatedRoute, private userService: UserService) {
   
   }

  ngOnInit() {
    this.userName = localStorage.getItem('currentUser');
    console.log(this.userName);
    this.reportAdded =false;

    this.userService.getUserByUsername(this.userName).subscribe(
      res => {

        this.user = res.json();
        console.log(this.user.hisID);
        console.log("get user successfully");
        this.getCurrentDoctor();
      },
      error => {
        console.log(error);

      }
    );
    
  }
 getCurrentDoctor() {
   //console.log(this.user.hisID);

    this._service.getDoctor_by_doctortId(this.user.hisID).subscribe(
      res => {

        this.doctor = res.json(); 
        this.doctor_reports_List = this.doctor.reports;
        if(this.doctor_reports_List.length===0){

          this.noReports=true;
        }else{
          this.noReports=false;
        }
        console.log(this.doctor.name);
        console.log(res);

      },
      err => {
        console.log(err);
      }
    );
  }  
  
//   this.user= JSON.parse(localStorage.getItem('currentUser')) ;

//     this.route.queryParams.subscribe(params => {
//             this.doctorID =  +params['doctorID'];  
           
//        });

//       if (this.doctorID != 0){

//               this.getCurrentDoctor_bydoctorID();

//        }
//        else{
//            this.getCurrentDoctor();
// 		   this.doctor_reports_List = this.doctor.reports;
//        }
   
    
//   }
//  getCurrentDoctor() {

//     this._service.getDoctor_by_doctortId(this.user.hisID).subscribe(
//       res => {
//         this.doctor= res.json(); 


//       },
//       err => {
      
//         this.notfound_Doctor=true;
       
	   
//       }
//     );
//   }

//   getCurrentDoctor_bydoctorID ()  {
//    this._service.getDoctor_by_doctortId(this.doctorID).subscribe(
//       res => {
//         this.doctor= res.json(); 


//       },
//       err => {
//          this.notfound_Doctor=true;
         
//         console.log(err);
//       }
//     );



//   }
  onAdd_Report()  {
    this.report.doctor = this.doctor;
    this.reportAdded = false;
    this._service.addReport(this.report,this.doctor.personalId).subscribe(
      res => {
            console.log("report added succesfully");
            this.report = new Report();
            this.reportAdded = true;
      },
      err => {
        console.log(err);
      }
    );



  }
}
