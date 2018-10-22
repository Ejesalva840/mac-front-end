import { Routes } from '@angular/router';
import { CheckInStudentComponent } from './navigation/check-in-student/check-in-student.component';
import { StudentDetailsComponent } from './navigation/student-details/student-details.component';

export const APP_ROUTES: Routes = [
    { path: 'checkin', component: CheckInStudentComponent },
    { path: 'search', component: StudentDetailsComponent },
    { path: '',
        redirectTo: '/checkin',
        pathMatch: 'full'
    }
];
