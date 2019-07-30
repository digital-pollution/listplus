import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { ItemDetailPage } from '../item-detail/item-detail.page';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public dataService: DataService
  ) {

    this.dataService.getData().then((items) => {
      if (items) {
        this.items = items;
      }
    });

  }

  ngOnInit() {

  }

  async addItem() {
    const modal = await this.modalCtrl.create({
      component: AddItemPage
    });

    modal.onDidDismiss().then((item) => {
      if (item.data) {
        this.saveItem(item);
      }
    });

    return await modal.present();
  }

  saveItem(item) {
    this.items.push(item.data);
    this.dataService.save(this.items);
  }

  viewItem(item) {
    this.navCtrl.navigateForward(`/item-detail/${item.id}`);
  }

}
