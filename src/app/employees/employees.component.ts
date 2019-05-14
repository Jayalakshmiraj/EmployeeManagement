import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mockEmployees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  empArr = EMPLOYEES;
  empObj:Employee={id:0,name:""};
selectedEmployee:Employee;
constructor() { }

  ngOnInit() {
  }
  addButton(){
    this.empArr.push(this.empObj);
  }
  deleteButtonLast(){
    this.empArr.splice(this.empArr.length-1,1)
  }
  deleteButton(i){
    this.empArr.splice(i,1)
  }
  edit(emp){
    this.selectedEmployee=emp;
  }
}


  // Employee1: Employee = { id: 0, name: "", email: "", phone: 0, address: "" };

  // fnAddEmployee() {

  //   var obj = {
  //     id: this.Employees.length + 1,
  //     name: this.Employee1.name,
  //     email: this.Employee1.email,
  //     address: this.Employee1.address,
  //   }
  //   this.Employees.push(this.Employee1);
  // }
  // fnDeleteEmployee() {
  //   console.log("works");
  //   for (var i = 1; i < this.Employees.length; i++) {

  //     if (this.Employees[i].id == this.Employee1.id) {
  //       this.Employees.splice(i, 1)

  //     }
  //   }
  // }
  // fnDeleteEmployees(emp) {
  //   for (var i = 0; i < this.Employees.length; i++) {
  //     if (this.Employees[i].id == emp.id) {
  //       this.Employees.splice(i, 1)

  //     }
  //   }

  // }

  // selectedEmployee: Employee;
  // onSelect(Employee1: Employee): void {
  //   this.selectedEmployee = Employee1;
  // }
  