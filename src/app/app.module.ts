import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import Services by bk ??? needed ?
import { LpuService } from './lpu.service';
import { PracticleService } from './practicle.service';

//import sub-components by bk
import { HomeComponent } from './home/home.component';
import { BcaComponent } from './bca/bca.component';
import { Ca1Component } from './ca1/ca1.component';
import { Ca1t1Component } from './ca1t1/ca1t1.component';
import { Ca1t2Component } from './ca1t2/ca1t2.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BcaComponent,
    Ca1Component,
    Ca1t1Component,
    Ca1t2Component,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //register Service here by bk ??? needed?
  providers: [LpuService, PracticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
