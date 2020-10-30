import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//needed for forms
import { FormsModule } from '@angular/forms';
//needed for observable
import { HttpClientModule } from '@angular/common/http';

//import Services by bk ??? needed ? - user defined
import { LpuService } from './lpu.service';
import { PracticleService } from './practicle.service';
import { Ca1Service } from './ca1.service';
import { Serv4observableService } from './serv4observable.service';
import { Serv4jsonpService } from './serv4jsonp.service';
import { Serv4pracService_Friends, Serv4pracService_Jokes } from "./serv4prac.service";


//import sub-components by bk - user defined
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
import { Form1Component } from './form1/form1.component';
import { Form2validateComponent } from './form2validate/form2validate.component';
import { DirectivesComponent } from './directives/directives.component';
import { BootsComponent } from './boots/boots.component';
import { InjectsComponent } from './injects/injects.component';
import { ObservableComponent } from './observable/observable.component';
import { JsonpComponent } from './jsonp/jsonp.component';
import { Prac1Component } from './prac/prac1/prac1.component';
import { Prac2Component } from './prac/prac2/prac2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BcaComponent,
    Ca1Component,
    Ca1t1Component,
    Ca1t2Component,
    ClassComponent,
    BindingComponent,
    EventsComponent,
    TwoWayBindingComponent,
    PipesComponent,
    Form1Component,
    Form2validateComponent,
    DirectivesComponent,
    BootsComponent,
    InjectsComponent,
    ObservableComponent,
    JsonpComponent,
    Prac1Component,
    Prac2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //register Service here by bk ??? needed?
  providers: [LpuService, PracticleService, Ca1Service, Serv4observableService, Serv4jsonpService,
  Serv4pracService_Friends, Serv4pracService_Jokes],
  bootstrap: [AppComponent]
})
export class AppModule { }
