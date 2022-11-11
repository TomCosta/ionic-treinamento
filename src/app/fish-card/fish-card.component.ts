import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.scss'],
})
export class FishCardComponent implements OnInit {

  @Input() dataFish: any;
  
  constructor(
    private route: Router
  ) { }

  ngOnInit() {}

  fishDetails(fishData) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: fishData
      }
    }
    this.route.navigate(['fish-details'], navigationExtras);
  }
}
