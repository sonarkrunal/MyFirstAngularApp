import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Http} from '@angular/http';
import {HttpServiceTestService} from '../http-service-test.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService, HttpServiceTestService]
})
export class ProductComponent implements OnInit {
  prodObj;
  httpRes;
  //http: Http;
  constructor(private prodService: ProductService, private http: Http, private HttpServiceTestService: HttpServiceTestService) { 
    this.prodObj = this.prodService.productDetails;
    this.httpRes = this.HttpServiceTestService.greeting;
  }

  ngOnInit() {
  }

  greeting(){
    this.http.get('http://rest-service.guides.spring.io/greeting').subscribe(res=>{
      console.log(res.json());
    })
  }

}
