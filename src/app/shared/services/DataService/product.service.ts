import { Injectable } from "@angular/core";
import { Observable, concat } from "rxjs";

import { ProductModel } from "../../models/ProductModel";



@Injectable()
export class ProductService {

    productModelArray: ProductModel[] = [];
    constructor() { }


    fetchProducts(category: string): ProductModel[] {
        let response =  this.loadAllBeverages()
                       .filter(catg => catg.productCategory == category)
                       

        return response;
    }

    private handleError(error: Response) {
        return Observable.throw(error.json());
    }

    private bindAllProducts(): ProductModel[] {
        return this.loadAllBeverages().concat(this.loadAllFruits())
    }


    private loadAllBeverages(): ProductModel[] {
        this.productModelArray = [];

        for(var i=0; i<=100;i++){
            let prod5 = new ProductModel();
            prod5.costPrice = 40;
            prod5.productCategory = "Beverages";
            prod5.productName = "Green Tea";
            prod5.maxItemAllowedInCart = 3;
            prod5.imageURL = "../../../assets/products/beverages/nescafe_coffee.jpg";
            this.productModelArray.push(prod5);
        }

        return this.productModelArray;
    }

    loadAllFruits() : ProductModel[]{
        let prod1 = new ProductModel();
        prod1.costPrice = 30;
        prod1.productCategory = "Fruits";
        prod1.productName = "Apple";
        prod1.maxItemAllowedInCart = 2;
        prod1.imageURL = "../../../assets/products/beverages/nescafe_coffee.jpg";
        this.productModelArray.push(prod1);


        let prod2 = new ProductModel();
        prod1.costPrice = 30;
        prod1.productCategory = "Pineapple";
        prod1.productName = "Apple";
        prod1.maxItemAllowedInCart = 4;
        prod1.imageURL = "../../../assets/products/beverages/nescafe_coffee.jpg";
        this.productModelArray.push(prod2);


        return this.productModelArray;

    }

}