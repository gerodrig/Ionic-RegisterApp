import { Component, OnInit, Type } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { AlertController } from '@ionic/angular';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  products: Product[];

public currentProduct:Product = {name: 'Type', price: 0, quantity: 0};
public isSelected:boolean = false;
public number:number = -1;
public qty:string = 'Quantity';
public total:string = 'Total';

  constructor(private data: ProductService, private alertCtrl: AlertController, private history: HistoryService) { }

  ngOnInit() {
    this.products = this.data.getProducts;

  }

  selectProduct (event: any, product: any) {
    this.products = this.data.getProducts;
    this.currentProduct = product;
    this.isSelected = true;


  if(this.isSelected && this.qty !== 'Quantity'){
    
    let temp = parseInt(this.qty) * this.currentProduct.price;
    this.total = temp.toFixed(2).toString();
    //console.log(this.currentProduct.price);
  
  }

    //console.log(product.name);
}

addNumber(value){
  if(this.qty === 'Quantity'){
    this.qty = value
  } else if(parseInt(this.qty) <= 999999){
    this.qty += value.toString();
  }

  if(this.isSelected && this.qty !== 'Quantity'){
    let temp = parseInt(this.qty) * this.currentProduct.price;
    this.total = temp.toString();
    console.log(this.currentProduct.price);
  
  }
  //console.log(this.isSelected);
}

clear(){
  this.qty = 'Quantity';
  this.currentProduct = {name: 'Type', price: 0, quantity: 0};
  this.total = 'Total';
  this.isSelected = false;
}

buy(){
  if(this.currentProduct.name === 'Type' || this.qty === 'Quantity'){
  this.presentAlert();
  } else {
    if(this.isSelected && parseInt(this.qty) <= this.currentProduct.quantity){
    let idx:number = this.products.findIndex((prod)=>
      prod.name === this.currentProduct.name    
    );       
    this.data.subqty(idx, parseInt(this.qty));
    this.products = this.data.getProducts;
    this.successAlert(this.currentProduct.name, this.qty);
    this.history.addPurchase(this.currentProduct.name, parseInt(this.qty), this.total)
    this.clear();
  
    //console.log(idx);
    }
  }
}

async presentAlert() {
  const alert = await this.alertCtrl.create({
    header: 'Alert',
    message: 'Product and quantity must be selected',
    buttons: ['OK']
  });

  await alert.present();
}

async successAlert(name:string, qty:string) {
  const alert = await this.alertCtrl.create({
    header: 'Success',
    message: `${qty} ${name}(s) purchased successfully`,
    buttons: ['OK']
  });

  await alert.present();
}

}
