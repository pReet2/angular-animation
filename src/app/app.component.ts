import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('directions',[
      state('tilt' , style({
        transform:'skewY(20deg)', transition: 'ease-in 0.5s',
      })),
      state('enlarge', style({
        transform: 'scale(1.5)' , transition: 'ease-out 1s',
      })),
      state('rotate', style({
        transform: 'rotate(160deg)' , transition: 'ease-in 1s',
      })),

      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))

  

    ])
]

})


export class AppComponent {
  title = 'testApp1';

  movement:string;
  show:boolean = false

  changeMovement(newMovement:string){
    this.movement = newMovement;

  }

  get hideShow() {
    return this.show ? 'show' : 'hide'
  }


  toggle() {
    this.show = !this.show;
  }

}
