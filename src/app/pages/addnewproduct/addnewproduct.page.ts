import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.page.html',
  styleUrls: ['./addnewproduct.page.scss'],
})
export class AddnewproductPage implements OnInit {

  product: Product = {name: '', price:null, quantity:null};
  products: Product[] = [];

  constructor(private data: ProductService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.products = this.data.getProducts;
  }

  onSubmit(form: NgForm){
    if(Number.isInteger(this.product.quantity) && !isNaN(this.product.price)){
      let idx:number = this.products.findIndex((prod)=>
      prod.name === this.product.name  
      );  
        if(idx === -1){
          //console.log('passed');
          //console.log(this.product);
          this.data.addProduct(this.product);
          this.successAlert(this.product.name);          
          //console.log(this.data);
          form.reset();
        } else {
          this.duplicateAlert(this.product.name);
          this.product.name = '';

        }
      
    } else if(this.product.name === 'Type' || this.product.name === 'Quantity'){
      this.warningAlert();
      this.product.name = '';
    } else {
      this.errorAlert();
      this.product.price = null;
      this.product.quantity = null;
    }

    
    
  }

  async errorAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'Product and quantity must be correct values',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async warningAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'Don\'t use reserved words in product name',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  async successAlert(name:string) {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: `${name}(s) added successfully`,
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async duplicateAlert(name:string) {
    const alert = await this.alertCtrl.create({
      header: 'Duplicated',
      message: `${name} is already listed in Products`,
      buttons: ['OK']
    });
  
    await alert.present();
  }

}
