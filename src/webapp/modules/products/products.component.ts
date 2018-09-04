import { Component } from '@angular/core';
import { ProductItem, Products } from './productsConstants';

 @Component({
   selector: 'products',
   templateUrl: './products.html',
  })
  export class ProductsComponent {
    nutrientProducts: Array<ProductItem> = Products.nutrient;
    shatterProducts: Array<ProductItem> = Products.shatter;
    product: string = 'nutrient';
    constructor(){
    }

    changeProduct(name: string) {
      this.product = name;
    }

}