import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Injectable()
export class ProductService {

  productCartSize = 0;
  myProductArray: any = [];

  authToken: any;

  constructor(
    private http: Http
  ) { }

  registerProduct(product) {

    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('product', JSON.stringify(product), { headers: headers })
    // return this.http.post('http://localhost:3000/product', JSON.stringify(product), { headers: headers })
      .map(res => res.json());

  }

  getProduct() {

    const headers = new Headers();

    headers.append('Content-type', 'application/json');

    return this.http.get('product', { headers: headers})
    // return this.http.get('http://localhost:3000/product', { headers: headers})
      .map(res => res.json());

  }

  getProductCartSize() {
    return localStorage.getItem('cnt');
  }

  getSingleProduct(id) {

    const headers = new Headers();

    headers.append('Content-type', 'application/json');

    return this.http.get(`product/${id}`,{headers: headers})
    // return this.http.get(`http://localhost:3000/product/${id}`,{headers: headers})
      .map(res => res.json());

  }


  deleteProduct(id) {

    const headers = new Headers();

    this.getToken();

    // console.log('Token '+this.authToken);
    headers.append('authorization', this.authToken);

    headers.append('Content-type', 'application/json');

    return this.http.delete(`product/${id}`,{headers: headers})
    // return this.http.delete(`http://localhost:3000/product/${id}`,{headers: headers})
      .map(res => res.json());

  }



  // getCategory(){
  //
  //   let headers = new Headers();
  //
  //   headers.append('Content-type', 'application/json');
  //
  //   return this.http.get('http://localhost:3000/category', { headers: headers })
  //     .map(res => res.json());
  //
  // }



  storeUserDatta(paramcnt, userId, product){

    console.log(product);

    let cnt2 = localStorage.getItem('cnt');

    this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));

    if (this.myProductArray == null) {
      console.log('My product cart array is null.' );
      this.myProductArray = [];
    }

    if (cnt2 == null) {
      // console.log('cnt2 is null.');
      cnt2 = '0';
    }

    let productExistence = false;
    let productIndex;

    console.log('My Product Cart array length: ' + this.myProductArray.length);

    for (let index = 0; index < this.myProductArray.length; index++) {
      const myProductInfo = this.myProductArray[index];
      console.log(myProductInfo);
      console.log();
      const myProduct = myProductInfo.myProduct;
      const myProductCount = myProductInfo.myProductCount;

      if (myProduct._id === product._id) {
        console.log('My Product exists');
        productExistence = true;
        console.log(this.myProductArray[index].myProductCount);
        this.myProductArray[index].myProductCount = this.myProductArray[index].myProductCount + 1;
        break;
      }
    }

    if (productExistence === false) {
      const myProductInfo: any = {};
      myProductInfo.myProduct = product;
      myProductInfo.myProductCount = 1;
      this.myProductArray.push(myProductInfo);
    }

    localStorage.setItem('myProductCart', JSON.stringify(this.myProductArray));

    const myPreviousCount = parseInt(cnt2);
    // console.log('After parsing: ' + myPreviousCount);
    cnt2 = (myPreviousCount + 1).toString();

    this.productCartSize = (myPreviousCount + 1);

    // console.log('After add: '  + paramcnt + ' get:  ' + cnt2);

    localStorage.setItem('cnt', cnt2);



    // console.log(user);
    // localStorage.setItem('user',JSON.stringify(user));
  }

  loadToken(){
    return localStorage.getItem('cnt');
  }

  getToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  updateProduct(id, product){

    const headers = new Headers();

    headers.append('Content-type', 'application/json');

    return this.http.patch(`product/${id}`, product, { headers: headers })
    // return this.http.patch(`http://localhost:3000/product/${id}`, product, { headers: headers })
      .map(res => res.json());
  }

}
