import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  } ,
  {path :'MobileRepair', loadChildren: () => import('./mobile-repair/mobile-repair.module').then(m => m.MobileRepairModule)},
  {path :'Accessories', loadChildren: () => import('./accessories/accessories.module').then(m => m.AccessoriesModule)},
  {path :'Mobiles', loadChildren: () => import('./mobiles/mobiles.module').then(m => m.MobilesModule)},
  {path: 'Stationary', loadChildren: () => import('./stationary/stationary.module').then(m => m.StationaryModule) },
  {path:'**',component:HomePageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
