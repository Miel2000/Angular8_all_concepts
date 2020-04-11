import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public explication = '';

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployeesByApi()
        .subscribe(data => this.employees = data);
  }

}
