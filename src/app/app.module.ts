import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AnalysisService } from './services/analysis.service';
import { DiognesService } from './services/diognes.service';
import { DiseaseService } from './services/disease.service';
import { DoctorService } from './services/doctor.service';
import { HospitalService } from './services/hospital.service';
import { MedicalAdviceService } from './services/medical-advice.service';
import { OperationService } from './services/operation.service';
import { PatientService } from './services/patient.service';
import { TreatmentService } from './services/treatment.service';
import { UserService } from './services/user.service';
import { UploadImageService } from './services/upload-image.service';
import { UpdateDoctorInfoService } from './services/update-doctor-info.service';
import { UpdatePatientInfoService } from './services/update-patient-info.service';

  




import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchdrugsComponent } from './searchdrugs/searchdrugs.component';
import { LoginComponent } from './login/login.component';
import { SignupdoctorComponent } from './signupdoctor/signupdoctor.component';
import { ProfileDoctorComponent } from './profile-doctor/profile-doctor.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfilePatientComponent } from './profile-patient/profile-patient.component';
import { ReciptionistComponent } from './reciptionist/reciptionist.component';
import { SearchPatientsComponent } from './search-patients/search-patients.component';
import { Error404Component } from './error-404/error-404.component';
import { AddDiognesisComponent } from './add-diognesis/add-diognesis.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { SighnupPatientComponent } from './sighnup-patient/sighnup-patient.component';
import { ProfilePatientInfoComponent } from './profile-patient-info/profile-patient-info.component';
import { SearchDoctorsComponent } from './search-doctors/search-doctors.component';
import { ViewDiognesComponent } from './view-diognes/view-diognes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchdrugsComponent,
    LoginComponent,
    SignupdoctorComponent,
    ProfileDoctorComponent,
    ProfileInfoComponent,
    ProfilePatientComponent,
    ReciptionistComponent,
    SearchPatientsComponent,
    Error404Component,
    AddDiognesisComponent,
    HomeComponent,
    SighnupPatientComponent,
    ProfilePatientInfoComponent,
    SearchDoctorsComponent,
    ViewDiognesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AnalysisService,DiognesService,DiseaseService,
  DoctorService,HospitalService,MedicalAdviceService,OperationService,
  PatientService,TreatmentService,UserService,UploadImageService,
  UpdateDoctorInfoService,UpdatePatientInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
