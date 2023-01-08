import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ShareFishService } from '../services/shareFish/share-fish.service';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.scss'],
})
export class FishCardComponent implements OnInit {

  @Input() dataFish: any;
  
  constructor(
    private shareServ: ShareFishService,
    private route: Router
  ) { }

  ngOnInit() {}

  fishDetails(fishData) {
    let dataFish = {
      img: fishData['Species Illustration Photo']?.src,
      name: fishData['Species Name'],
      protein: fishData['Protein']
    }
    // let navigationExtras: NavigationExtras = {
    //   state: {
    //     data: dataFish
    //   }
    // }
    this.shareServ.setFish(dataFish);
    this.route.navigate(['fish-details']);  //  , navigationExtras);
  }
}
