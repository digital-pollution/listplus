import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(public storage: Storage) { }

  getData() {
    return this.storage.get('listItem');
  }

  save(data) {
    this.storage.set('listItem', data);
  }
}
