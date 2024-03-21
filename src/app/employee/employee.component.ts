import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  emplo:any=[]

  getData(val:any){
    this.emplo=val
    // console.log("hiii",this.emplo)
  }

}
