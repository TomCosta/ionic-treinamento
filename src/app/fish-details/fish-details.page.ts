import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-details.page.html',
  styleUrls: ['./fish-details.page.scss'],
})
export class FishDetailsPage implements OnInit {

  dataFish: any;

  constructor(
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
  }

}
