import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.css']
})
export class AngularDirectivesComponent implements OnInit {
  appTitle: string = "My first directive";
  appStatus: boolean = true;
  students: any[] = [
    {"id":12, "name":"krunal"},
    {"id":13, "name":"Ashwini"},
    {"id":14, "name":"Krishna"}
  ];
  name:string = "Dinesh";

  color: string = 'red';
  fontSize: number = 14;
  bgcolor: string = 'yellow';

  constructor() { }

  ngOnInit() {
  }

}
