import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { History } from 'src/app/interfaces/history.interface';

@Component({
  selector: 'app-histdetails',
  templateUrl: './histdetails.page.html',
  styleUrls: ['./histdetails.page.scss'],
})
export class HistdetailsPage implements OnInit {

  @Input() item: History;

  public date: string;

  constructor(private modalCtrl: ModalController) { }

  

  ngOnInit() {
    this.date = this.item.date.toLocaleString();
  }
  
  exit(){
    //console.log(this.item);
  this.modalCtrl.dismiss();
}



}
