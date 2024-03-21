import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {
  employeeData:any=[]
  empForm:any=[]

  @Output() formevent = new EventEmitter <any>

  employee={
  id:'',
  name:'',
  role:''
 };

 ngOnInit() {
  const storedEmployeeData = localStorage.getItem('employeeData');
  if(storedEmployeeData!=null){
    this.employeeData=JSON.parse(storedEmployeeData)
  }
  // const parsedEmployeeData = storedEmployeeData ? JSON.parse(storedEmployeeData) : null;
  // this.employeeData = parsedEmployeeData || [];
}

 onSubmit(){
  this.employeeData.push(this.employee)
  localStorage.setItem('employeeData',JSON.stringify(this.employeeData));
  // console.log('data:',this.employeeData)
 
  this.formevent.emit(this.employeeData)
  this.employee={
    id:'',
    name:'',
    role:''
  };

  // this.route.navigateByUrl("/table")

 }

 }

