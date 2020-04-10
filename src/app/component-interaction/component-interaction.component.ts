import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('dataDuParent') public nom: string;

  // tslint:disable-next-line: max-line-length
  // pour passer une variable de l'enfant au parent, on instantie EventEmitter et on l'importe. ensuite on crée un evenement (genre click ou autre dans le template)
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  triggerEvent() {
    // tslint:disable-next-line: max-line-length
    this.childEvent.emit('Hey hey hey, Enfant to parent grâce à l\'instanciation de EventEmitter, puis on .emit notre variable dans une function déclenchée au click ');
  }

}
