import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [`
  .text-success {
    color:green;
  }
  .text-danger {
    color:red;
  }
  .text-special {
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('dataDuParent') public nom: string;

  // tslint:disable-next-line: max-line-length
  // pour passer une variable de l'enfant au parent, on instantie EventEmitter et on l'importe. ensuite on crée un evenement (genre click ou autre dans le template)
  @Output() public childEvent = new EventEmitter();

// Pipes
 public person = {
  'firstName': 'Paul',
  'lastName': 'Dupont'
 }


  public prenom = 'Jozef';
  public url = window.location.href;
  public isDisabled = true;

  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  public highLightColor = 'yellow';

  public titleStyles =  {
    color: 'orange',
    fontStyle: 'italic'
  };

  public myId = 'testId';
  public greeting = '';


  public name = '';


  public displayCondition = false;

  constructor() { }

  ngOnInit() {

  }

  conditionClick() {
    this.displayCondition = !this.displayCondition;
  }

  triggerEvent() {
    // tslint:disable-next-line: max-line-length
    this.childEvent.emit('Hey hey hey, Enfant to parent grâce à l\'instanciation de EventEmitter, puis on .emit notre variable dans une function déclenchée au click ');
  }


  handleClick(yeet) {

    this.greeting = yeet.type + ' <--- venant du component, on peut choper levent';

  }

  logMessage(value_ou_ske_je_veux_au_final_kwa) {
    // il reçoit simplement le paramettre du template myInput.value sur le button, qui lui est linké à l'input grace à #myInput
    console.log(value_ou_ske_je_veux_au_final_kwa);
  }

  greetUser() {
    return 'Hello ' + this.prenom;
  }

}
