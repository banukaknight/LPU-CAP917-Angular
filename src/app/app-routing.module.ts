import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//routing components by bk_self
import { HomeComponent } from './home/home.component';
import { BcaComponent } from './bca/bca.component';
import { Ca1Component } from './ca1/ca1.component';


const routes: Routes = [
  //routing stuff by bk_self
  { path: '', component: HomeComponent },
  { path: 'bca', component: BcaComponent },
  { path: 'ca1', component: Ca1Component },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//added for routing by bk
export const appRoutingModule = RouterModule.forRoot(routes);
