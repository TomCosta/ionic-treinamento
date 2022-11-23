import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor(
    private storage: Storage
  ) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storage = storage;
  }

  setItem(key, value) {
    this.storage.set(key, value);
  }

  getItem(key) {
    return this.storage.get(key);
  }

  removeItem(key) {
    return this.storage.remove(key);
  }

  clearItems() {
    return this.storage.clear();
  }
}
