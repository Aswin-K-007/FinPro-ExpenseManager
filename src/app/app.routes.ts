import { Routes } from '@angular/router';
import { Login } from '@auth/components/login/login';
import { Register } from '@auth/components/register/register';
import { Home } from '@dashboard/components/home/home';
import { AddExpenses } from '@features/expenses/components/add-expenses/add-expenses';
import { ViewExpenses } from '@expenses/components/view-expenses/view-expenses';
import { EditExpenses } from '@features/expenses/components/edit-expenses/edit-expenses';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // Expense routes protected by AuthGuard
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

  // Wildcard route for unknown paths
  { path: '**', redirectTo: 'home' },
];
