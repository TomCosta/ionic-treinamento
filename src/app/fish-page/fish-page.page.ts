import { StorageServiceService } from '../services/storage-service/storage-service.service';
import { NetworkServiceService } from './../services/on-off/network.service';
import { ApiService } from 'src/app/services/api-service/api.service';
import { NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fish-page',
  templateUrl: './fish-page.page.html',
  styleUrls: ['./fish-page.page.scss'],
})
export class FishPagePage implements OnInit {

  fishItems: any;

  constructor(
    private storageServ: StorageServiceService,
    private netServ: NetworkServiceService,
    private apiServ: ApiService,
    private route: Router
  ){
    this.checkOffline();
  }

  checkOffline() {
    let status = this.netServ.checkNetwork();
    if(status==='Online'){
      this.getFishSpecies();
    } else {
      this.getOffLineFishes();
    }
  }

  ngOnInit() {
    // this.getFishSpecies();
  }

  getFishSpecies() {
    this.apiServ.getFishSpecies()
    .subscribe((res) => {
      this.fishItems = res;
      this.storageServ.setItem('fishData', res);
      console.log('data Online: ', res);
    });
  }

  async getOffLineFishes() {
    const dataFish = await this.storageServ.getItem('fishData');
    this.fishItems = dataFish;
    console.log('getOffLineFishes: ', dataFish);
  }

  async sendFishes() {
    this.checkOffline();
  }

}
