import { Routes } from '@angular/router';
import { ListStudentComponent } from './estudiante/list-student/list-student.component';

export const routes: Routes = [
    {
        path: 'student',
        component: ListStudentComponent
    },
    {
        path: '',
        redirectTo: 'student',
        pathMatch: 'full'
    },
];
