import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  productDetails = [
    {'id': 1, 'name': 'test1', 'price':123},
    {'id': 2, 'name': 'test2', 'price':1234},
    {'id': 3, 'name': 'test3', 'price':12345},
    {'id': 4, 'name': 'test4', 'price':123456},
  ]

}
