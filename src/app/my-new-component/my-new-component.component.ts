import { Component} from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.scss']
})

export class MyNewComponentComponent {
  btnStyle = 'btn-default';
  cardGifStyle = 'cardGif'
  displayText: string = 'Good Morning';
  onClickMorning() {
   this.displayText = "Good Morning"
   this.btnStyle = 'btn-default';
   this.cardGifStyle = 'cardGif'
  }
  onClickEvening(){
    this.displayText = "Good Evening"
    this.btnStyle = 'btn-change';
    this.cardGifStyle = 'cardGifNight'
  }
}
