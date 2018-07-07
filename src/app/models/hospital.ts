import {Doctor} from './doctor';
import {Patient} from './patient';
import {Address} from './address';

export class Hospital {
    public id: number;
    public name: string;
    public phone: string;
    public address: Address;
    public doctors: Doctor [];
    public hospitalPatients: Patient [];
}
