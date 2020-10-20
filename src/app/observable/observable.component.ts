import { Component, OnInit } from '@angular/core';
//import services by bk
import { Serv4observableService } from '../serv4observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  message1 = 'This is one tough topic';
  posts: any[];

  constructor(
    //create instance of service
    private serviceInst: Serv4observableService
  ) { }

  ngOnInit(): void {
    this.serviceInst.getJsonDataaa().subscribe(data => this.posts = data)
    ;
  }

}
