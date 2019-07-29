import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {

  }

  async addItem() {
    const modal = await this.modalCtrl.create({
      component: AddItemPage
    });

    modal.onDidDismiss().then((item) => {
      if (item) {
        this.saveItem(item);
      }
    });

    return await modal.present();
  }

  saveItem(item) {
    this.items.push(item.data);

    console.warn(this.items);
  }

  viewItem(item) {

  }

}
