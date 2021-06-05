import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {

  items: Product[];
  public currentItem:Product = {name: 'Default', price: 0, quantity: 0};
  public isItemSelected:boolean = false;

  constructor(private data: ProductService, private alertCtrl: AlertController, private navCtrl:NavController) { }

  input:number;

  ngOnInit() {
    this.items = this.data.getProducts;
  }

  selectItem(event: any, product: any) {
    this.currentItem = product;
    this.isItemSelected = true;

  }

  restock(){
    if(!Number.isInteger(this.input) || !this.isItemSelected){
      this.errorAlert();
      this.input = null;
    } else {
      if(this.isItemSelected && this.input > 0){
        let idx:number = this.items.findIndex((prod)=>
          prod.name === this.currentItem.name    
        ); 
        this.data.addqty(idx, this.input);
        this.items = this.data.getProducts;
        this.successAlert(this.currentItem.name, this.input);
        this.input = null;
      }
    }
  }

  async errorAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'Quantity number must be a valid Integer and a Product must be selected',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async successAlert(name:string, qty:number) {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: `${qty} ${name}(s) added successfully`,
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
