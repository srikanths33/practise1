import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllstudentsComponent } from './components/dashboard/allstudents/allstudents.component';
import { CreateStudentsComponent } from './components/dashboard/create-students/create-students.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"allstudents",component:AllstudentsComponent},
    {path:"createstudent",component:CreateStudentsComponent}
  ]},
  {path:"",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
