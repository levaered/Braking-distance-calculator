import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-braking-distance-calculator',
  templateUrl: './braking-distance-calculator.component.html',
  styleUrls: ['./braking-distance-calculator.component.scss']
})

export class BrakingDistanceCalculatorComponent {
  killometrs: string = '';
  perceptionTime: string = '';
  reactionTime: string = '';
  slope: string = '';
  movement: number = 0;
  roadConditionsString: string = 'Cухой асфальт';
  roadConditions: number = 0;
  brakingTypeString: string = 'Пневматический';
  breakingType: number = 0;
  shp: number = 0;
  shr: number = 0;
  sbrl: number = 0;
  sbr: number = 0;
  finalResult: number = 0;

  @ViewChild('radio1') radio1!: ElementRef;
  ifRadio1Checked() {
    if (this.radio1.nativeElement.hasAttribute('checked')) {
        this.movement = 0;
    }
  }

  @ViewChild('radio2') radio2!: ElementRef;
  ifRadio2Checked() {
    if (this.radio1.nativeElement.hasAttribute('checked')) {
      this.movement = 1;
    }
  }

  optionRoad1(){
    this.roadConditionsString = 'Cухой асфальт';
    this.roadConditions = 0.7;
  }
  optionRoad2(){
    this.roadConditionsString = 'Мокрый асфальт';
    this.roadConditions = 0.4;
  }
  optionRoad3(){
    this.roadConditionsString = 'Покрытый снегом асфальт';
    this.roadConditions = 0.3;
  }
  optionRoad4(){
    this.roadConditionsString = 'Покрытый льдом асфальт';
    this.roadConditions = 0.02;
  }

  optionBreaking1(){
    this.brakingTypeString = 'Пневматический';
    this.breakingType = 0.4;
  }
  optionBreaking2(){
    this.brakingTypeString = 'Гидравлический';
    this.breakingType = 0.1;
  }

  result(){
    this.shp = parseInt(this.killometrs) * parseInt(this.perceptionTime);
    this.shr = parseInt(this.killometrs) * parseInt(this.reactionTime);
    this.sbrl = parseInt(this.killometrs) * this.breakingType;
    this.sbr = (parseInt(this.killometrs) * parseInt(this.killometrs)) / (2 * this.roadConditions * 9.8)
    this.finalResult = this.shp + this.shr + this.sbrl + this.sbr;
  }
}