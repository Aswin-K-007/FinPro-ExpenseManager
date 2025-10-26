import { Routes } from '@angular/router';
import { Login } from '@auth/components/login/login';
import { Register } from '@auth/components/register/register';
import { Home } from '@dashboard/components/home/home';
import { AddExpenses } from '@features/expenses/components/add-expenses/add-expenses';
import { ViewExpenses } from '@expenses/components/view-expenses/view-expenses';
import { EditExpenses } from '@features/expenses/components/edit-expenses/edit-expenses';

export const routes: Routes = [

{path:"",redirectTo:"home",pathMatch:'full'},
{path:"home",component:Home},
{path:"login",component:Login},
{path:"register",component:Register},
{path:"expenses", redirectTo:"expenses/view",pathMatch:"full"},
{path:"expenses/view", component:ViewExpenses},
{path:"expenses/add", component:AddExpenses},
{path:"expenses/edit/:id", component:EditExpenses}
];
