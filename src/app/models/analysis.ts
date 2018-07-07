import {Doctor} from './doctor';
import {Patient} from './patient';

export class Analysis {
    public id: number;
    public path: string=" ";
    public name: string;
    public date: string;
    public doctor: Doctor;
    public patient: Patient;
}
