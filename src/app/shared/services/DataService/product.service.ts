import { Injectable } from "@angular/core";
import { Observable, concat } from "rxjs";

import { ProductModel } from "../../models/ProductModel";
import { HttpClient } from "@angular/common/http";
import { GlobalConfigurationModel } from "../../models/globalconfigModel";
import { map } from "rxjs/operators";



@Injectable()
export class ProductService {
     
   
    productModelArray: ProductModel[] = [];
    constructor(private http: HttpClient) { }


    fetchProducts(category: string): ProductModel[] {
        
        let productModel:ProductModel[]=[];
        this.http.get<ProductModel[]>('https://angular-firebase-825de.firebaseio.com/beverages.json')
        .subscribe(data =>{
              data.forEach(element => {
                 let prod = new ProductModel();
                 prod.costPrice = element.costPrice;
                 prod.imageURL = element.imageURL;
                 prod.maxItemAllowedInCart = element.maxItemAllowedInCart;
                 prod.productCategory = element.productCategory;
                 prod.productId = element.productId;
                 prod.productName = element.productName;

                 productModel.push(prod);
              });
        })             

        return productModel;
    }

    storeProducts(){
      const beveragesList = this.loadAllBeverages();
      var requestUrl = "https://angular-firebase-825de.firebaseio.com/beverages.json";
      this.http.post(requestUrl,beveragesList).subscribe(data =>{
        console.log('Records Inserted Succesfully!!!');
      });
    }

    private handleError(error: Response) {
        return Observable.throw(error.json());
    }

    private bindAllProducts(): ProductModel[] {
        return this.loadAllBeverages().concat(this.loadAllFruits())
    }


    private loadAllBeverages(): ProductModel[] {
        this.productModelArray = [];

        for(var i=0; i<=10;i++){
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