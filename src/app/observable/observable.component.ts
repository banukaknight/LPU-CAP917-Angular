import { Component, OnInit } from '@angular/core';
//import services by bk
import { Serv4observableService } from '../serv4observable.service';
import { Class4observable, Intf4observable2 } from '../class4observable';

import { Observable } from 'rxjs'; //reactive extention jS

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  message1 = 'This is one tough topic';
  posts: Class4observable[]; //to store local json file's data (any[] or use Intf4observable[])
  jsonfromweb: any[]; //to store web-json data -- accept any[] datatype, or use Intf4observable2[]

  obs_results: Observable<Class4observable[]>; //type: observable that emits an array of Class4observable

  constructor(
    //create instance of service
    private serviceInst: Serv4observableService
  ) { }

  ngOnInit(): void {
    this.serviceInst.getJsonDataaa().subscribe(data => this.posts = data);
    this.serviceInst.getJsonDataaa2().subscribe(data => this.jsonfromweb = data);

    //this need: using async pipe that autimatically subscribe to an observable
    this.obs_results = this.serviceInst.getJsonDataaa(); // no need to subscribe 
  }

}
