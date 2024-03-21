import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {



@Input() receivedData:any

ngOnInit(): void {
  const storedData=localStorage.getItem('employeeData')
  if(storedData!=null)
  {
    this.receivedData=JSON.parse(storedData);
  }
}


//   title = 'project';
//  filtereduser:any;
//  text: string = '';
//  currentPage=1;
//  totalPage=0;
//  itemsPerPage=5

  

 
// constructor(){
//   this.getData()
//   this.totalPage=Math.ceil((this.employee.length)/this.itemsPerPage)
// }
// getData()
// {
//   let start=(this.currentPage-1)*this.itemsPerPage
//   let end=start+this.itemsPerPage
//   this.filtereduser=this.employee.slice(start,end) 
// }

// Onsearch(){
// this.filtereduser=this.employee.filter((employee: { name: string; id: string | string[]; role: string; })=>{
//   return employee.name.toLowerCase().includes(this.text.toLowerCase()) || employee.id.includes(this.text) || employee.role.toLowerCase().includes(this.text)
// })
// }
// LastPage()
// {
// this.currentPage--;
// this.getData()
// }

// NextPage()
// {
//   this.currentPage++;
//   this.getData()


// }







}