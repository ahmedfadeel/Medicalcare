import {Doctor} from './doctor';
import {Patient} from './patient';

export class Operation {
    public id: number;
    public date: string;
    public name: string;
    public hopitalName: string="any";
    public  doctor: Doctor;
    public patient: Patient;
}

