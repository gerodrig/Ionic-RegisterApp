import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { History } from 'src/app/interfaces/history.interface';
import { HistoryService } from '../../services/history.service';
import { HistdetailsPage } from '../histdetails/histdetails.page';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  items: History[];

  constructor(private history: HistoryService, private modalCtrl: ModalController) { }

  ngOnInit() {

    this.items = this.history.getHistory;
  }

  async showHistDetails(item: History){
    const modal = await this.modalCtrl.create({
      component: HistdetailsPage,
      componentProps: {item},
    });

    //console.log(item);
    return await modal.present();
  }


}
