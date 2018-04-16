import { Component, OnInit } from '@angular/core';
import { ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../service/validate.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  name: String;
  description: String;
  picture: String;
  price: String;



  constructor(
    private productService: ProductService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {

    console.log('Submit clicked');

    const product = {
      name: this.name,
      description: this.description,
      price: this.price
    }

    this.productService.registerProduct(product).subscribe( response => {
      if (response.success) {
        console.log(response.data._id);
        const id = response.data._id;
        this.flashMessage.show('Successfully created Product', { cssClass: 'alert-success' });
        this.router.navigate([`/photo/${id}`]);
      } else {
        this.router.navigate(['/product']);
      }
    });

  }

}
