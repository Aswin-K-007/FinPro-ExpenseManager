import { Routes } from '@angular/router';
import { Login } from '@auth/components/login/login';
import { Register } from '@auth/components/register/register';
import { Home } from '@dashboard/components/home/home';
import { AddExpenses } from '@expenses/components/add-expenses/add-expenses';
import { ViewExpenses } from '@expenses/components/view-expenses/view-expenses';
import { EditExpenses } from '@expenses/components/edit-expenses/edit-expenses';
import { AuthGuard } from './core/guards/auth-guard';
import { ViewProfile } from '@profile/components/view-profile/view-profile';
import { EditProfile } from '@profile/components/edit-profile/edit-profile';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  {
    path: 'expenses',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'view', component: ViewExpenses },
      { path: 'add', component: AddExpenses },
      { path: 'edit/:id', component: EditExpenses },
    ],
  },

  {
    path: 'profile',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'view', component: ViewProfile},
      { path: 'edit', component: EditProfile},
    ],
  },

  { path: '**', redirectTo: 'home' },
];
