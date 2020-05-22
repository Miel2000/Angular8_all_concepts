import { Component, OnInit, NgModule, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-user-detail',
  templateUrl: './api-user-detail.component.html',
  styleUrls: ['./api-user-detail.component.scss']
})
export class ApiUserDetailComponent implements OnInit {
// comment chopé ici l'id qui a été cliqué dans le api-users
  public userId;
  public userName;
  public monGars;

  constructor( private http:HttpClient, private router:Router, private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userName = this.route.snapshot.paramMap.get('name');
    console.log('Constructor user-detail');

   }

  ngOnInit() {
   
  }

}
