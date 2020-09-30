import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//routing components by bk_self
import { HomeComponent } from './home/home.component';
import { BcaComponent } from './bca/bca.component';
import { Ca1Component } from './ca1/ca1.component';
import { Ca1t1Component } from './ca1t1/ca1t1.component';
import { Ca1t2Component } from './ca1t2/ca1t2.component';
import { ClassComponent } from './class/class.component';
import { BindingComponent } from './binding/binding.component';
import { EventsComponent } from './events/events.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  //routing stuff by bk_self
	{ path: '', component: HomeComponent },
	{ path: 'Class', component: ClassComponent },
	{ path: 'BCA', component: BcaComponent },
	{ path: 'CA1-Inject', component: Ca1Component },
	{ path: 'CA1-Temp1', component: Ca1t1Component },
	{ path: 'CA1-Temp2', component: Ca1t2Component },
	{ path: 'Binding', component: BindingComponent },
	{ path: 'Events', component: EventsComponent },
	{ path: 'TwoWayBinding', component: TwoWayBindingComponent },
	{ path: 'Pipes', component: PipesComponent },



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
