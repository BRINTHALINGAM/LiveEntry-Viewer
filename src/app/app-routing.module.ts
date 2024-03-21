import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';

// const routes: Routes = [
//   {
//     path:'',
//     component:EmployeeFormComponent,
//   },
//   {
//     path:'table',
//     component:EmployeeTableComponent
//   }
// ];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
