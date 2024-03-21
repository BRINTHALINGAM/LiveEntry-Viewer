import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
