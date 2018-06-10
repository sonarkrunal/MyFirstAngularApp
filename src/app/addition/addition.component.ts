import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  addition(number1:String, number2:String){
    var num1 = +number1;
    var num2 = +number2;
    alert("Addition: "+ (num1+num2));
  }

}
