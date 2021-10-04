import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Calculator';
  number1!:number;
  number2!:number;
  result!:number;

  getValue(value:any){
    this.number1 = parseInt(value);
  }

  getValue2(value:any){
    this.number2 = parseInt(value);
  }

  add(){
    this.result=this.number1+this.number2
  }

  sub(){
    this.result=this.number1+this.number2
  }

  multi(){
    this.result=this.number1+this.number2
  }

  div(){
    this.result=this.number1+this.number2
  }
}

