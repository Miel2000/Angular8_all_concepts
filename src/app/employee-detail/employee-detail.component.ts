import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public employeeId: number;
  public employeeName: string;
  
 

  constructor(private _employeeService: EmployeeService,
                      private route: ActivatedRoute) { }

  ngOnInit() {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;
  
    this._employeeService.getEmployeesByApi()
    .subscribe(data => this.employees = data);
      }
  

    


}
