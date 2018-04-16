import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any[];

  isAdmin: any;

  constructor(private productService: ProductService, private router: Router) {
    this.products = [];
    if (localStorage.getItem('isAdmin') === 'true') {
      this.isAdmin = 1;
    }
    console.log('Admin: ' + this.isAdmin);
  }

  ngOnInit() {
    this.productService.getProduct()
      .subscribe(value => {
        this.products = value.data;
        console.log(this.products);
      });
  }

  cart(cnt, productId, product) {
    this.productService.storeUserDatta(cnt, productId, product);
  }

  detailsView(id) {
    this.router.navigate([`/details/${id}`]);

  }

  editProduct(id) {
    this.router.navigate([`/product/${id}`]);
  }

  delFunc(product) {
    this.products.splice(this.products.indexOf(product), 1);
    this.productService.deleteProduct(product._id).subscribe(respnse => {
    });
  }

}
