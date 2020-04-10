import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  public prenom = 'Jozef';
  public url = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.prenom;
  }
}
