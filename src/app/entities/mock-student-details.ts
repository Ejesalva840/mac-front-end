import { MOCKCONTACTS } from './mock-contacts';
import { StudentDetails } from './student-details';

export const MOCKSTUDENTDETAILS: StudentDetails[] = [
    {
        'studentId': 1,
        'name': 'Jane Doe',
        'belt': 'YELLOW',
        'martialStyle': 'Taekwondo',
        'dateJoined': new Date('07/15/2010'),
        'allergies': 'Peanuts',
        'numberClassesPresentInCycle': 2,
        'emergencyContacts': [
            MOCKCONTACTS[0],
            MOCKCONTACTS[1]
        ]
    },
    {
        'studentId': 2,
        'name': 'Bob Lee',
        'belt': 'BLACK',
        'martialStyle': 'Hapkido',
        'dateJoined': new Date('03/12/2017'),
        'allergies': 'Eggs',
        'numberClassesPresentInCycle': 4,
        'emergencyContacts': [
            MOCKCONTACTS[2]
        ]
    },
    {
        'studentId': 3,
        'name': 'Ely Jelly',
        'belt': 'WHITE',
        'martialStyle': 'Taekwondo',
        'dateJoined': new Date('10/25/2018'),
        'allergies': null,
        'numberClassesPresentInCycle': 1,
        'emergencyContacts': null
    },
    {
        'studentId': 4,
        'name': 'Clarance Walter',
        'belt': 'ORANGE',
        'martialStyle': 'Taekwondo',
        'dateJoined': new Date('08/01/2017'),
        'allergies': 'Peanuts, wheat',
        'numberClassesPresentInCycle': 4,
        'emergencyContacts': null
    },
    {
        'studentId': 5,
        'name': 'Kylie Zen',
        'belt': 'WHITE',
        'martialStyle': 'Taekwondo',
        'dateJoined': new Date('07/15/2010'),
        'allergies': 'Milk, Eggs',
        'numberClassesPresentInCycle': 2,
        'emergencyContacts': [
            MOCKCONTACTS[3]
        ]
    },
    {
        'studentId': 6,
        'name': 'Brittney Square',
        'belt': 'BROWN',
        'martialStyle': 'Hapkido',
        'dateJoined': new Date('09/12/2011'),
        'allergies': null,
        'numberClassesPresentInCycle': 3,
        'emergencyContacts': null
    },
    {
        'studentId': 7,
        'name': 'Eric Wayne',
        'belt': 'PURPLE',
        'martialStyle': 'Hapkido',
        'dateJoined': new Date('03/16/2012'),
        'allergies': null,
        'numberClassesPresentInCycle': 5,
        'emergencyContacts': null
    },
    {
        'studentId': 8,
        'name': 'Walter Smith',
        'belt': 'YELLOW',
        'martialStyle': 'Hapkido',
        'dateJoined': new Date('10/05/2018'),
        'allergies': 'Peanuts, Egg',
        'numberClassesPresentInCycle': 3,
        'emergencyContacts': [
            MOCKCONTACTS[4]
        ]
    },
    {
        'studentId': 9,
        'name': 'Carter Jones',
        'belt': 'GREEN',
        'martialStyle': 'Taekwondo',
        'dateJoined': new Date('09/21/2015'),
        'allergies': null,
        'numberClassesPresentInCycle': 2,
        'emergencyContacts': null
    },
    {
        'studentId': 10,
        'name': 'Nick Holden',
        'belt': 'BLACK',
        'martialStyle': 'Taekwondo',
        'dateJoined': new Date('09/19/2017'),
        'allergies': 'Wheat, Egg, Milk',
        'numberClassesPresentInCycle': 5,
        'emergencyContacts': null
    }
];
