import {Patient} from './patient';
import {MedicalAdvice} from './medical-advice';
import {Diognes} from './diognes';


export class Disease {
    public id: number;
    public name: string;
    public info: string;
    public tybe: string;
    public  medicalAdviceList: MedicalAdvice [];
    public  patientsList: Patient [];
    public dioList: Diognes;
}
