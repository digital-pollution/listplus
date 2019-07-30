import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  id;
  title;
  description;
  due;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit() {
    const currentId = Number(this.route.snapshot.paramMap.get('id'));

    this.dataService.getData().then((items) => {

      items.map((item) => {
        if (item.id === currentId) {
          this.title = item.title;
          this.description = item.description;
          this.due = item.due;
        }
      });

    });

  }

  back() {
    this.navCtrl.navigateBack('/home');
  }
}
