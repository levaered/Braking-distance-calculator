import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { TimerComponent } from './timer/timer.component';
import { BrakingDistanceCalculatorComponent } from './braking-distance-calculator/braking-distance-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    TimerComponent,
    BrakingDistanceCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
