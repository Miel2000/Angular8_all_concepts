import { Component, OnInit, Output, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public explication = '';



  constructor(private _employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployeesByApi()
        .subscribe(data => this.employees = data);
  }

  onSelect(employee) { 
    console.log("yeeet" + employee.id);
    console.log("yeeet" + employee.name);

    console.log("yeeet" + employee.age);
   
    this.router.navigate(['/employee-detail/' , employee.id]);
    

  }

}
