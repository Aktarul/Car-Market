import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class ProductService {

  constructor(
    private http: Http
  ) { }

  registerProduct(product) {

    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/product', JSON.stringify(product), { headers: headers })
      .map(res => res.json());

  }

  getProduct() {

    const headers = new Headers();

    headers.append('Content-type', 'application/json');

    return this.http.get('http://localhost:3000/product', { headers: headers})
      .map(res => res.json());

  }

}
