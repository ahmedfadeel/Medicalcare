import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddDiognesisComponent} from './add-diognesis/add-diognesis.component';
import {Error404Component} from './error-404/error-404.component';
import {ProfileDoctorComponent} from './profile-doctor/profile-doctor.component';
import {ProfileInfoComponent} from './profile-info/profile-info.component';
import {ProfilePatientComponent} from './profile-patient/profile-patient.component';
import {ReciptionistComponent} from './reciptionist/reciptionist.component';
import {SearchPatientsComponent} from './search-patients/search-patients.component';
import {SearchdrugsComponent} from './searchdrugs/searchdrugs.component';
import {SignupdoctorComponent} from './signupdoctor/signupdoctor.component';
import { SighnupPatientComponent} from './sighnup-patient/sighnup-patient.component';
import { HomeComponent } from './home/home.component';
import { ProfilePatientInfoComponent } from './profile-patient-info/profile-patient-info.component';
import { ViewDiognesComponent} from './view-diognes/view-diognes.component';

import { SearchDoctorsComponent } from './search-doctors/search-doctors.component';

const appRoutes: Routes = [
    {
		path : '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
    {
		path: 'error-404',
		component: Error404Component
	},
	{
		path: 'about-us',
		component: HomeComponent
	},
	
	{
		path: 'add-diognesis',
		component: AddDiognesisComponent
	},
	
	{
		path: 'profile-doctor',
		component: ProfileDoctorComponent
	},
	{
		path: 'profile-info',
		component: ProfileInfoComponent
	},
	{
		path: 'profile-patient-info',
		component: ProfilePatientInfoComponent
	},
	{
		path: 'profile-patient',
		component: ProfilePatientComponent
	},
	{
		path: 'reciptionist',
		component: ReciptionistComponent
	},
	{
		path: 'search-patients',
		component: SearchPatientsComponent
	},
	{
		path: 'search-doctors',
		component: SearchDoctorsComponent
	},
	{
		path: 'searchdrugs',
		component: SearchdrugsComponent
	},
	{
		path: 'signupdoctor',
		component: SignupdoctorComponent
	},
	{
		path: 'signup-patient',
		component: SighnupPatientComponent
	}
	,{
		path: 'view-diognes',
		component: SighnupPatientComponent
	}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);