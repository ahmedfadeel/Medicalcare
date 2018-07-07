import {Address} from './address';
import {Hospital} from './hospital';
import {Diognes} from './diognes';
import {Operation} from './operation';
import {Analysis} from './analysis';
import {Doctor} from './doctor';
import {Disease} from './disease';

export class Patient {
    public id: number;
    public personalId: number;
    public name: string;
    public birthDate: string;
    public gender: string;
    public phone: string;
    public email: string;
    public street: string;
    public center: string;
    public goverment: string;
    public city: string;
    public lenth: string;
    public weight: string;
    public patientHospitals: Hospital [];
    public doctors: Doctor [];
    public dioList: Diognes [];
    public operations: Operation [];
    public diseasesList: Disease [];
    public analysises: Analysis [];
    public ImagePath: string;
}
