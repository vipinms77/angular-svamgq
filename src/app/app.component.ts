import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '';
  numArr = [];
  array = [];
  constructor(){
    for(let i = 1; i <= 30; i++){
      this.numArr.push(i);
      if(i%3 == 0&&i%5 == 0){
        this.array.push('AB');     
      } else if (i%3 == 0){
        this.array.push('A');
      }  else if (i%5 == 0) {
        this.array.push('B')
      }  else {
        this.array.push(i);
      }
    }
  }
}
