import { Component } from '@angular/core';
import { ProductItem, Products } from '../../products/productsConstants';

 @Component({
   selector: 'request-quote',
   templateUrl: './requestQuote.html',
  })
  export class RequestQuoteComponent {
    nutrientProducts: Array<ProductItem> = Products.nutrient;
    shatterProducts: Array<ProductItem> = Products.shatter;
    product: string = 'nutrient';
    companyName: string;
    quoteList: Set<ProductItem> = new Set();

    constructor(){
    }

    changeProduct(name:string) {
      this.product = name;
    }

    sendInQuoteRequest() {

    }

    addToQuoteList(item: ProductItem) {
      if (item.quantity > 0) {
        this.quoteList.add(item);
      } else {
        this.quoteList.delete(item);
      }
    }

}