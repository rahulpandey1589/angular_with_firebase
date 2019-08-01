import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../models/ProductModel';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})

export class ProductInfoComponent implements OnInit {
  @Input() productCategory:string;
  @Input() productId:number;
  @Input() productName:string;
  @Input() productUrl:string;
  @Input() maxItemCanAddInCart:number;
  @Input() costPrice:number;
  @Output('addProductsToCart')
                  onAddProducts : EventEmitter<any>
                  = new EventEmitter<any>();
  @Output('removeProductsFromCart') 
                 onRemoveProducts:EventEmitter<any>
                 = new EventEmitter<any>();
  
  itemCount:any= 0;
  productModel: ProductModel;
  
  constructor() { }

  ngOnInit() {
  }

  addProducts():void{
       this.itemCount = parseInt(this.itemCount) + 1;
       this.productModel = new ProductModel();
       this.productModel.productId = this.productId;
       this.productModel.productName = this.productName;
       this.productModel.productCategory = this.productCategory;
       this.productModel.costPrice = this.costPrice;

       this.onAddProducts.emit(this.productModel);
  }

  removeProducts():void{
    this.itemCount = parseInt(this.itemCount) - 1;

    this.productModel = new ProductModel();
    this.productModel.productId = this.productId;
    this.productModel.productName = this.productName;
    this.productModel.productCategory = this.productCategory;

    this.onRemoveProducts.emit(this.productModel);
  }
     

  disableAddIcon():boolean{
    return  this.itemCount == this.maxItemCanAddInCart ? true:false;
  }

  disableSubtractIcon():boolean{
    return (this.itemCount == 0) == true;
  }

}
