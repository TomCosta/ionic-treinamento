import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkServiceService {

  constructor(
    private toastController: ToastController
  ) {
  }

  checkNetwork() {
    if(navigator.onLine) {
        this.netAlert(status);
        return status = 'Online';
    } else {
        this.netAlert(status);
        return status = 'Offline';
    }
  }

  async netAlert(status){
    const toast = await this.toastController.create({
      message: 'Internet '+status,
      color: 'tertiary',
      duration: 3000,
      position: 'middle'
    });
    await toast.present();
  }

}
