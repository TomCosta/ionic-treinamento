import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-details.page.html',
  styleUrls: ['./fish-details.page.scss'],
})
export class FishDetailsPage implements OnInit {

  constructor(
    private route: Router
  ){

  }

  ngOnInit() {
  }

}
