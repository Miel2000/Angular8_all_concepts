import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-users',
  templateUrl: './api-users.component.html',
  styleUrls: ['./api-users.component.scss']
})
export class ApiUsersComponent implements OnInit {
 @Output()
public monTab;
public monUser;
public website;

  constructor(private http:HttpClient, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let response =  this.http.get('https://jsonplaceholder.typicode.com/users');
    response.subscribe((data) => 
                        this.monTab = data);
  }

onClick(event) {
  console.log(event.target.id);
  const userId: string =  event.target.id;
  

  let resp =  this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);

  resp.subscribe((data) => {

    console.log(data);
    this.website = data;
    
})

//this.router.navigate(['api-user-detail/' , userId]);
}


}
