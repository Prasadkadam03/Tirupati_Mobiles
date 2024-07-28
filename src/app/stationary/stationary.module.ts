import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationaryRoutingModule } from './stationary-routing.module';
import { StationaryComponent } from './stationary/stationary.component';


@NgModule({
  declarations: [
    StationaryComponent
  ],
  imports: [
    CommonModule,
    StationaryRoutingModule
  ]
})
export class StationaryModule { }
