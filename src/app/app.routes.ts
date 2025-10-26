import { Routes } from '@angular/router';
import { Login } from '@auth/components/login/login';
import { Register } from '@auth/components/register/register';
import { Home } from '@dashboard/components/home/home';
import { AddEditExpenses } from '@expenses/components/add-edit-expenses/add-edit-expenses';
import { ViewExpenses } from '@expenses/components/view-expenses/view-expenses';

export const routes: Routes = [

{path:"",redirectTo:"home",pathMatch:'full'},
{path:"home",component:Home},
{path:"login",component:Login},
{path:"register",component:Register},
{path:"expenses/view", component:ViewExpenses},
{path:"expenses/add-edit", component:AddEditExpenses}

];
