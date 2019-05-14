import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "status", component: StatusComponent },
  {path:"login",component:LoginComponent},
  { path: "employees", component: EmployeesComponent },
  {path: "", redirectTo: "/status",pathMatch: "full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
