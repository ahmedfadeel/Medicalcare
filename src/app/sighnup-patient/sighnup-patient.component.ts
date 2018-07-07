import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/patient';
import { User } from '../models/user';
import { UserService } from './../services/user.service';
import { UploadImageService } from '../services/upload-image.service';
@Component({
  selector: 'app-sighnup-patient',
  templateUrl: './sighnup-patient.component.html',
  styleUrls: ['./sighnup-patient.component.css']
})
export class SighnupPatientComponent implements OnInit {

  private newPatient: Patient = new Patient();
  private newUser: User = new User();

  private usernameExistsPatient: boolean;
  private personalIdExistsPatient: boolean;
  private PatientAdded: boolean = false;
  constructor(private patientService: PatientService,
    private _router: Router,
    private uploadImageService: UploadImageService,
    private userService: UserService
  ) { }
  addPatient() {
    this.PatientAdded = false;
    this.personalIdExistsPatient = false;
    this.usernameExistsPatient = false;

    this.patientService.addPatient(this.newPatient).subscribe(
      res => {
        console.log(res);
        this.newUser.tybe = "patient";
        this.newUser.hisID = this.newPatient.personalId;


        this.userService.addUser(this.newUser).subscribe(
          res => {
            console.log(res);
            this.uploadImageService.uploadImagePatient(this.newPatient.personalId);
            this.newPatient = new Patient();
            this.newUser = new User();
            this.PatientAdded = true;
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
          this.personalIdExistsPatient = true;
        }
      }
    );


  }
  ngOnInit() {
  }

}



