import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRepairRoutingModule } from './mobile-repair-routing.module';
import { MobileRepairComponent } from './mobile-repair/mobile-repair.component';


@NgModule({
  declarations: [
    MobileRepairComponent
  ],
  imports: [
    CommonModule,
    MobileRepairRoutingModule
  ]
})
export class MobileRepairModule { }
