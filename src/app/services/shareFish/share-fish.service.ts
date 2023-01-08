import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

// const fishSubject = new BehaviorSubject(Object);

@Injectable({
  providedIn: 'root'
})
export class ShareFishService {

  fishSubject = new BehaviorSubject(Object);

  constructor() {
  }

  setFish(dataFish: any) {
    this.fishSubject.next(dataFish);
    localStorage.setItem('behavFish', JSON.stringify(dataFish));
  }

  getFish() {    
    let share;
    if(!this.fishSubject) {
      share = of(localStorage.getItem('behavFish'));
    } else {
      share = this.fishSubject;
    }
    console.log('FishServ: ', share);
    return share;
  }
}
