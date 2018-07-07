import {Patient} from './patient';
import {Address} from './address';
import {Hospital} from './hospital';
import {Diognes} from './diognes';
import {Operation} from './operation';
import {Analysis} from './analysis';
import { Report } from './report';



export class Doctor {
    public id: number;
    public personalId: number;
    public name: string;
    public bithDate: string;
    public fauclty: string;
    public department: string;
    public email: string;
    public phone: string;
    private  city: string;
    private  street: string;
    private  goverment: string;
    private  center: string;
    public otherInfo: string;

    public patients: Patient [];
    public doctorHospital: Hospital;
    public  dioList: Diognes [];
    public operations: Operation [];
    public  analysises: Analysis [];
    public reports: Report[];
    public imagePath: string;
    public clinikCity: string;
    public clinicStreet: string;
    public clinicGoverment: string;
    public clinicCenter: string;
}
