import { Component, OnInit, ViewChild } from '@angular/core';;

import { ProductModel } from '../shared/models';
import { ProductService } from '../shared/services/DataService/product.service';


@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})

export class BeveragesComponent implements OnInit {

  productId: number;
  productName: string;
  productItems: ProductModel[] = [];

  constructor(private _productService: ProductService) {

  }

  ngOnInit() {
    this.bindBeverages();
  }

  bindBeverages() {
      let prodResponse = this._productService.fetchProducts('beverages');
      this.productItems = [];
      this.productItems = prodResponse;
  }


  handleAddProductResult(response: ProductModel): void {
    if (response != null) {
    }

    console.log("On Add Products:" + response.productId);
  }

  handleRemoveProductResult(response: ProductModel): void {
    if (response != null) {
    }

    console.log("On Remove Products:" + response.productId);
  }

  addToCart(data: ProductModel): void {

  }

  removeFromCart(data: ProductModel): void {
  }
}
