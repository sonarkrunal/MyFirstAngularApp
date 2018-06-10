import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HttpServiceTestService {

  constructor(private http:Http) { }

  greeting(){
    this.http.get('http://rest-service.guides.spring.io/greeting').subscribe(res=>{
      console.log(res.json());
    })
  }

}
