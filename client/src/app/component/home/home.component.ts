import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct()
      .subscribe(value => {
        this.products = value.data;
        console.log(this.products);
      });
  }
}
