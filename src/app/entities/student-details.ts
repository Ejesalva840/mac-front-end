import { Contact } from './contact';

export interface StudentDetails {
    'studentId': number;
    'name': string;
    'belt': string;
    'martialStyle': string;

    'dateJoined': Date;
    'allergies': string | null;
    'numberClassesPresentInCycle': number;
    'emergencyContacts': Contact[];
}
