import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-biding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.scss']
})
export class EventBidingComponent implements OnInit {

  public greeting = '';
  public text_taper = '';
  constructor() { }

  ngOnInit() {
  }

  handleClick(yeet) {

    this.greeting = yeet.type + ' <--- venant du component, on peut choper levent';

  }

  logMessage(value_ou_ske_je_veux_au_final_kwa) {
    this.text_taper = '';
    // il reçoit simplement le paramettre du template myInput.value sur le button, qui lui est linké à l'input grace à #myInput
    console.log(value_ou_ske_je_veux_au_final_kwa);
    this.text_taper = value_ou_ske_je_veux_au_final_kwa;
  }

}
