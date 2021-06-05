import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: Product[] =[
    {
      name: 'Pants',
      price: 50.7,
      quantity: 20
    },
    {
      name: 'Shoes',
      price: 90,
      quantity: 50
    },
    {
      name: 'Hats',
      price: 20.5,
      quantity: 10
    },
    {
      name: 'T-Shirts',
      price: 30.5,
      quantity: 10
    },
    {
      name: 'Dresses',
      price: 99,
      quantity: 24
    },
    {
      name: 'Socks',
      price: 15,
      quantity: 50
    }
  ]

get getProducts(): Product[]{
  return [...this._products];
}


subqty(idx: number, qty:number){
  this._products[idx].quantity -= qty  
}

addqty(idx: number, qty:number){
  this._products[idx].quantity += qty  
}

  constructor() { }

  addProduct(product: Product){
    let temp:Product = {name: product.name, price: product.price, quantity: product.quantity };
    this._products.push( temp );
  }
}
