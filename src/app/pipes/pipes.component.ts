import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  // Pipes
 public date = new Date();
 public namePipe = 'Fabieng';
 public msgPipe = 'Yeet dat my msg';
 public person = {
  firstName: 'Paul',
  lastName: 'Dupont'
 };

  constructor() { }

  ngOnInit() {
  }

}
