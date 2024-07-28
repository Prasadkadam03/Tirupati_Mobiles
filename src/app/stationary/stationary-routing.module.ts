import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationaryComponent } from './stationary/stationary.component';

const routes: Routes = [
  {path:'',
 component:StationaryComponent  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StationaryRoutingModule { }
