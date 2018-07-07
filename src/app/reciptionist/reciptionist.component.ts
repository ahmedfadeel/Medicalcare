import { Component, OnInit } from '@angular/core';
import { Doctor } from './../models/doctor';
import { Patient } from './../models/patient';
import { User } from './../models/user';
import { PatientService } from './../services/patient.service';
import { DoctorService } from './../services/doctor.service';
import { UserService } from './../services/user.service';


@Component({
  selector: 'app-reciptionist',
  templateUrl: './reciptionist.component.html',
  styleUrls: ['./reciptionist.component.css']
})
export class ReciptionistComponent implements OnInit {
  
  
  
  private newDoctor: Doctor = new Doctor();
  private newPatient: Patient = new Patient();
  private newUser: User = new User();

  
  /***************************************************************************
  
  private objectAdded: boolean = false;
  
  private usernameExists: boolean;
  private personalIdisNull: boolean;
  private personalIdExists: boolean;
  private usernameisNull: boolean;
 
  private usernameis_small: boolean = false;
  private wrongPhone: boolean = false;
  private wrongemail: boolean = false;
  private wrongebithDate: boolean = false;
  private wrongefauclty: boolean = false;
  private wrongedepartment: boolean = false;
  private uploadImagefailed: boolean = false;
  
  
  /***************************************************************
  
  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService,
    private userService: UserService
  ) { }
  addPatient() {
   
	
    this.patientService.addPatient(this.newPatient).subscribe(
      res => {
        console.log(res);
        this.newUser.tybe = "patient";
        this.newUser.hisID = this.newPatient.personalId;


        this.userService.addUser(this.newUser).subscribe(
          res => {
            console.log(res);
            this.newPatient = new Patient();
            this.newUser = new User();
            this.objectAdded = true; 
          },
          error => {
            console.log(error);
            let errorMessage = error.text();
            if (errorMessage === "usernameExists") {
              this.usernameExistsPatient = true;
            }
            this.patientService.removePatient(this.newUser.hisID).subscribe(
              res => {
                console.log(res);

              },
              error => {
                console.log(error);
              }
            );
          }
        );

      },
      error => {
        console.log(error);
        let errorMessage = error.text();
		
        if (errorMessage === "this personal id i already exists") {
          this.personalIdExists = true;
        }
		if (errorMessage === "personal id is requried") {
          this.personalIdisNull = true;
        }
		 if (errorMessage === "name is required") {
          this.usernameisNull = true;
        }
		 if (errorMessage === "name length is small") {
          this.usernameis_small = true;
        }
		
		 if (errorMessage === "phone number is required") {
          this.wrongPhone = true;
        }
		 if (errorMessage === "the birthdate must be at past") {
          this.wrongebithDate = true;
        }
		 
		 if (errorMessage === "upload Failed !") {
          this.uploadImagefailed = true;
        }
		
      }
    );


  }
  addDoctor() {
    
    this.doctorService.addDoctor(this.newDoctor).subscribe(
      res => {
        console.log(res);
        this.newUser.tybe = "doctor";
        this.newUser.hisID = this.newDoctor.personalId;


        this.userService.addUser(this.newUser).subscribe(
          res => {
            console.log(res);
            this.newDoctor = new Doctor();
            this.newUser = new User();
            this.objectAdded = true;

          },
          error => {
            console.log(error);
            let errorMessage = error.text();
            if (errorMessage === "usernameExists") {
              this.usernameExistsDoctor = true;
            }
            this.doctorService.removeDoctor(this.newUser.hisID).subscribe(
              res => {
                console.log(res);
              },
              error => {
                console.log(error);
              }
            );
          }
        );

      },
      error => {
        console.log(error);
        let errorMessage = error.text();
		
        if (errorMessage === "this personal id i already exists") {
          this.personalIdExists = true;
        }
		if (errorMessage === "personal id is requried") {
          this.personalIdisNull = true;
        }
		 if (errorMessage === "name is required") {
          this.usernameisNull = true;
        }
		 if (errorMessage === "name length is small") {
          this.usernameis_small = true;
        }
		
		 if (errorMessage === "phone number is required") {
          this.wrongPhone = true;
        }
		 if (errorMessage === "Email is required") {
          this.wrongemail = true;
        }
		if (errorMessage === "the birthdate must be at past") {
          this.wrongebithDate = true;
        }
		if (errorMessage === "your fauclty is requried") {
          this.wrongefauclty = true;
        }
		 if (errorMessage === "your department is requried") {
          this.wrongedepartment = true;
        }
		 if (errorMessage === "upload Failed !") {
          this.uploadImagefailed = true;
        }
      }
    );


  }

  ngOnInit() {
  
    this.usernameExists = false;
    this.objectAdded = false;
    this.personalIdExists = false;
	this.personalIdisNull = false;
    this.usernameisNull = false;
    this.usernameis_small= false;
	this.wrongPhone= false;
	this.wrongemail= false;
	
	this.wrongebithDate= false;
	this.wrongefauclty= false;
	this.wrongedepartment= false;
	
	this.uploadImagefailed= false;
  }

}
