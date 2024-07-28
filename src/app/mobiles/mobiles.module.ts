import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilesRoutingModule } from './mobiles-routing.module';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    CommonModule,
    MobilesRoutingModule
  ]
})
export class MobilesModule { }
