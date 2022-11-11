import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { FishCardComponentRoutingModule } from './fish-page-routing.module';
import { FishCardComponent } from './fish-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [FishCardComponent],
  declarations: [FishCardComponent]
})
export class FishCardComponentModule {}
