import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileRepairComponent } from './mobile-repair/mobile-repair.component';
import { AppModule } from '../app.module';

const routes: Routes = [
  {path:'',
 component:MobileRepairComponent  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRepairRoutingModule { }
