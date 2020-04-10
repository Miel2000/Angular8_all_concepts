import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-of-component-interaction',
  templateUrl: './parent-of-component-interaction.component.html',
  styleUrls: ['./parent-of-component-interaction.component.scss']
})
export class ParentOfComponentInteractionComponent implements OnInit {
  public nom = 'Fabiwabi';
  constructor() { }

  ngOnInit() {
  }

}
