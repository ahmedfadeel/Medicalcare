import { Component, OnInit } from '@angular/core';
import { Diognes } from './../models/diognes';

@Component({
  selector: 'app-view-diognes',
  templateUrl: './view-diognes.component.html',
  styleUrls: ['./view-diognes.component.css']
})
export class ViewDiognesComponent implements OnInit {

  private diognes: Diognes = new Diognes();
  private pressure: boolean;
  private pulse: boolean;
  private temperature: boolean;
  private bMI: boolean;
  private gemeralApperance: boolean;
  private facialExpression: boolean;
  private painAssessment: boolean;
  private headSutures: boolean;
  private headFontanels: boolean;
  private headNeckOthers: boolean;
  private chestComments: boolean;
  private heartSounds: boolean;
  private murmurs: boolean;
  private heartOthers: boolean;
  private liver: boolean;
  private kidneys: boolean;
  private spleen: boolean;
  private abdomenOthers: boolean;
  private extGenetalia: boolean;
  private upperLimdsjoints: boolean;
  private upperLimdsOthers: boolean;
  private lowerLimdsjoints: boolean;
  private lowerLimdsOthers: boolean;
  private possibleCause: boolean;
  private deformities: boolean;
  private neurologicalMotor: boolean;
  private neurologicalSensory: boolean;
  private comments: boolean;
  private fallRiskAssessment: boolean;


  constructor() { }

  ngOnInit() {
    this.pressure=true;
    this.pulse=true;
    this.temperature =true;
    this.bMI=true;
    this.gemeralApperance=true;
    this.facialExpression=true;
    this.painAssessment=true;
    this.headSutures = true;
    this.headFontanels = true;
    this.headNeckOthers = true;
    this.heartSounds=true;
    this.chestComments=true;
    this.murmurs=true;
    this.heartOthers=true;
    this.liver=true;
    this.kidneys = true;
    this.spleen = true;
    this.abdomenOthers = true;
    this.extGenetalia = true;
    this.upperLimdsjoints = true;
    this.upperLimdsOthers = true;
    this.lowerLimdsjoints = true;
    this.lowerLimdsOthers = true;
    this.possibleCause = true;
    this.deformities = true;
    this.neurologicalMotor = true;
    this.neurologicalSensory = true;
    this.comments = true;
    this.fallRiskAssessment = true;


    this.diognes.preature=null;
    console.log(this.diognes.preature);
    this.diognes.facialExpression="bnh bjh h";
    this.diognes.jaundice=false;
    if(this.diognes.preature === null){
      this.pressure=false;
      console.log("if");
    }
    // }else{
    //   this.pressure=true;
    // }
    if(this.diognes.pulse===null){
      this.pulse=false;
    }
    // }else{
    //   this.pulse=true;
    // }
    if(this.diognes.temperature===null){
      this.temperature=false;
    }
    // }else{
    //   this.temperature=true;
    // }
    if(this.diognes.bMI===null){
      this.bMI=false;
    }
    // }else{
    //   this.bMI=true;
    // }
    if(this.diognes.gemeralApperance===null){
      this.gemeralApperance=false;
    }
    // }else{
    //   this.gemeralApperance=true;
    // }
    if(this.diognes.facialExpression===null){
      this.facialExpression=false;
    }
    // }else{
    //   this.facialExpression=true;
    // }
    if(this.diognes.painAssessment===null){
      this.painAssessment=false;
    }
    // }else{
    //   this.painAssessment=true;
    // }
    if(this.diognes.headSutures===null){
      this.headSutures=false;
    }
    // }else{
    //   this.facialExpression=true;
    // }
    if(this.diognes.headFontanels===null){
      this.headFontanels=false;
    }
    // }else{
    //   this.facialExpression=true;
    // }
    if(this.diognes.headNeckOthers===null){
      this.headNeckOthers=false;
    }
    // }else{
    //   this.facialExpression=true;
    // }
    if(this.diognes.chestComments===null){
      this.chestComments=false;
    }
    // }else{
    //   this.facialExpression=true;
    // }
    if(this.diognes.heartSounds===null){
      this.heartSounds=false;
    }
    // }else{
    //   this.facialExpression=true;
    // }
    if(this.diognes.murmurs===null){
      this.murmurs=false;
    }
    if(this.diognes.heartOthers===null){
      this.heartOthers=false;
    }
    if(this.diognes.liver===null){
      this.liver=false;
    }
    if(this.diognes.kidneys===null){
      this.kidneys=false;
    }
    if(this.diognes.spleen===null){
      this.spleen=false;
    }
    if(this.diognes.abdomenOthers===null){
      this.abdomenOthers=false;
    }
    if(this.diognes.extGenetalia===null){
      this.extGenetalia=false;
    }
    if(this.diognes.upperLimdsjoints===null){
      this.upperLimdsjoints=false;
    }
    if(this.diognes.upperLimdsOthers===null){
      this.upperLimdsOthers = false;
    }
    if(this.diognes.lowerLimdsjoints===null){
      this.lowerLimdsjoints = false;
    }
    if(this.diognes.lowerLimdsOthers===null){
      this.lowerLimdsOthers = false;
    }
    if(this.diognes.possibleCause===null) {
      this.possibleCause=false;
    }
    if(this.diognes.deformities===null){
      this.deformities=false;
    }
    if(this.diognes.neurologicalMotor===null){
      this.neurologicalMotor=false;
    }
    if(this.diognes.neurologicalSensory===null){
      this.neurologicalSensory=false;
    }
    if(this.diognes.comments===null){
      this.comments = false;
    }
    if(this.diognes.fallRiskAssessment===null){
      this.fallRiskAssessment=false;
    }
  }

}
