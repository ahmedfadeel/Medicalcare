import {Diognes} from './diognes';
import {Disease} from './disease';

export class MedicalAdvice {

   public id: number;
   public tybe: string;
   public txt: string;
   public diognes: Diognes;
   public disease: Disease;
}
