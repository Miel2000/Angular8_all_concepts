import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
    {'id': 1, 'name': 'Benoit', 'age': 30},
    {'id': 2, 'name': 'Romaing', 'age': 24},
    {'id': 3, 'name': 'Jean', 'age': 35},
    {'id': 4, 'name': 'Charles', 'age': 50}
   ];
  }
}
