import { Component, OnInit } from '@angular/core';
import {Diognes} from './../models/diognes';
import {Treatment} from './../models/treatment';
import { MedicalAdvice } from './../models/medical-advice';
import { Doctor } from '../models/doctor';
import { Patient } from '../models/patient';
import { DiognesService } from '../services/diognes.service';

@Component({
  selector: 'app-add-diognesis',
  templateUrl: './add-diognesis.component.html',
  styleUrls: ['./add-diognesis.component.css']
})
export class AddDiognesisComponent implements OnInit {

  private diognes: Diognes = new Diognes();
  private treatment: Treatment = new Treatment();
  private medicalAdvice: MedicalAdvice = new MedicalAdvice();
  private tretments: Treatment[] = [];
  private medicalAdvices: MedicalAdvice[] = [];
  private doctor: Doctor;
  private patient: Patient;
  private diognesAdded: boolean;

  constructor(
    private diognesService: DiognesService
  ) { }


  addDiognes(){
    console.log(this.diognes.deformities);
    console.log(this.diognes.unexplainedBurn);


    this.diognes.medicalAdvicesList = this.medicalAdvices;
    this.diognes.treaments = this.tretments;
    this,this.diognesService.addDiognese(this.diognes).subscribe(
      res =>{
        console.log(res);
        this.diognesAdded = true;
      },error =>{
        console.log(error);
      }
    );
    

  }
  addAdvice(){
    let newAdvice: MedicalAdvice = new MedicalAdvice();
    newAdvice.txt =this.medicalAdvice.txt;
    console.log(this.medicalAdvice.txt);

    newAdvice.tybe="advice";
    this.medicalAdvices.push(newAdvice);
    this.medicalAdvice = new MedicalAdvice();
    console.log("add advice");

  }
  addTreatment(){
    let newTreatment: Treatment = new Treatment();
    newTreatment.dose = this.treatment.dose;
    newTreatment.name = this.treatment.name;

    this.tretments.push(newTreatment);
    this.treatment= new Treatment();

  }

  ngOnInit() {
    this.diognes.pallor = false;
    this.diognes.cyanosis = false;
    this.diognes.jaundice = false;
    this.diognes.hairDistibution = false;
    this.diognes.unexpectedBruise = false;
    this.diognes.unexplainedBurn = false;
    this.diognes.Scars = false;
    this.diognes.veins = false;
    this.diognes.stiffness = false;
    this.diognes.thyroid = false;
    this.diognes.lNodes = false;
    this.diognes.expansion = false;
    this.diognes.breathingSounds = false;
    this.diognes.advSounds = false;
    this.diognes.nippleDisgarge = false;
    this.diognes.ascites = false;
    this.diognes.masses = false;
    this.diognes.lowerLimbsOdema = false;
    this.diognes.disabilitesMotor = false;
    this.diognes.hearing = false;
    this.diognes.visual = false;
    this.diognes.mental = false;
    this.diognes.psychic = false;
    this.diognes.autism = false;
    this.diognes.learningDisabilities = false;
    this.diognes.nose = false;
    this.diognes.throat = false;
    this.diognes.nutritionalRiskAssessment = false;
    this.diognes.functionalRehabilitationAssessmentN = false;
    this.diognes.functionalRehabilitationAssessmentAp = false;
    this.diognes.riskForDM = false;
    this.diognes.riskForHypertension = false;
    this.diognes.riskForOthers = false;
    this.diognes.riskForComments = false;
    this.diognesAdded = false;
    
    


    
  }

}
