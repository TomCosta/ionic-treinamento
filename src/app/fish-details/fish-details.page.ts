import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareFishService } from '../services/shareFish/share-fish.service';

@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-details.page.html',
  styleUrls: ['./fish-details.page.scss'],
})
export class FishDetailsPage implements OnInit {

  dataFish: any;

  constructor(
    private shareServ: ShareFishService,
    private actRouter: ActivatedRoute,
    private route: Router
  ){
    this.actRouter.queryParams.subscribe(param => {
      if(this.route.getCurrentNavigation().extras.state){
        this.dataFish = this.route.getCurrentNavigation().extras.state.data;
        console.log('Data Params: ', this.dataFish);
      }
    })
  }

  ngOnInit() {
    this.getSharedFish();
  }

  getSharedFish() {
    this.shareServ.getFish()
    .subscribe({
      next: (dataFish: any) => {
        this.dataFish = dataFish;
        console.log('FishDeyails: ', dataFish);
      },
      error: (e: Error) => console.error(e),
      complete: () => console.info('complete:')
    });
  }
}
