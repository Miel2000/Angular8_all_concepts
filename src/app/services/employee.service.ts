import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private _url: string = '/assets/data/employees.json';


  getEmployeesByApi(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

  getEmployees() {
    return [
      {'id': 1, 'name': 'Benoit', 'age': 30},
      {'id': 2, 'name': 'Romaing', 'age': 24},
      {'id': 3, 'name': 'Jean', 'age': 35},
      {'id': 4, 'name': 'Charles', 'age': 50}
    ];
  }
}

  /*
    explication d'un observable.
    en partant du service
    1) On fait une requette HTTP GET à une API ou une DB
    2) On reçoit une réponse qui est un Observable qu'on cast dans un array
      2.1) Utiliser une get<interface>(), ici employee.ts/IEmployee qui mappe les données attendu dans un [] ->  return this.http.get<IEmployee[]>(this._url) et avant dans la déclaration de la methode on lui precise bien getEmployeesByApi(): Observable<IEmployee[]> {... (éwè typescript oblige !);
    3) Dans le component qui en a besoin, on .subscribe à l'observable,
      3.1) Pour subscibe, il faut passé par une fonction qui assigne à une variable local les données comme ceci :  this._employeeService.getEmployeesByApi()
        .subscribe(data => this.employees = data);
        le premier data est le parametre de ma fonction, le second est le corps des données, au milieu ma variable local employees déclaré plus haut
    4) On l'assigne à une variable local

    Pour utiliser une api, on a besoin du HttpClientModule, il suffit d'importer dans app.module.ts import { HttpClientModule } from '@angular/common/http' puis dans imports, puis ensuite injecter import { HttpClient } from '@angular/common/http'; dans le service qui en a besoin, en prenant soin de l'injecter dans le constructor du service
     constructor(private http: HttpClient) { }

    La petite histoire memotechnique avec le journalisme :
     - l'API ou la base de donnée représenterai une grosse ligne d'information brute
     - Le service lui représenterai mediapart, il reçoit l'info brute et le met en page
     - Ceux qui veulent lire représenterai nos components dans lesquels on veut se servire de ces informations, s'inscrive (.subscribe) a la mise en page qu'a fait mediapart.
     - une fois la mise en page reçu à la maison (dans le component qu'on veut), on l'assigne à une variable local
     - Et Paf !
  */