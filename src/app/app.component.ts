import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  variable1: string = 'variable1';
  variable2: string = 'variable2';
  isCondition = true;

  changeVariable(){
    this.isCondition = !this.isCondition;
  }

}

