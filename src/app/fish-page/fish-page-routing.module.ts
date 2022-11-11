import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FishPagePage } from './fish-page.page';

const routes: Routes = [
  {
    path: '',
    component: FishPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FishPagePageRoutingModule {}
