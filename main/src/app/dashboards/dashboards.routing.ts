import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: ' Paciente' }
          ]
        }
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard Médico',
          urls: [
            { title: 'Dashboard', url: '/dashboard2' },
            { title: 'Dashboard Médico' }
          ]
        }
      }
    ]
  }
];
