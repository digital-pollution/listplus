import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  id: number;
  title: string;
  description: string;
  due: string;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {

  }

  dateSelected(event) {
    console.warn('date selected event', event);
  }

  saveItem() {
    let newItem = {
      id: Math.floor(Date.now() / 1000),
      title: this.title,
      description: this.description,
      due: 'test'
    };

    this.modalCtrl.dismiss(newItem);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
