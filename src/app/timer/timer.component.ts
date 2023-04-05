import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  date: Date = new Date()  
  hours = String(this.date.getHours())
  minutes = String(this.date.getMinutes())
  secs = String(this.date.getSeconds())
  autoSaveInterval = setInterval(() => {
    this.date = new Date()
    if(this.date.getHours() < 10){
      this.hours = "0" +  this.date.getHours()
    }
    else{
      this.hours = String(this.date.getHours())
    }
    if(this.date.getMinutes() < 10){
      this.minutes = "0" +  this.date.getMinutes()
    }
    else{
      this.minutes = String(this.date.getMinutes())
    }
    if(this.date.getSeconds() < 10){
      this.secs = "0" +  this.date.getSeconds()
    }
    else{
      this.secs = String(this.date.getSeconds())
    }
  }, 1000);
}
