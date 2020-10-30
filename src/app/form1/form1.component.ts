import { Component, OnInit } from '@angular/core';
// import class for object creation
import {Class4form1} from '../class4form1';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  myObj1 = new Class4form1("Dave Chappel","123456789","Galle","23215324","International",true);


  constructor() { }

  ngOnInit(): void {
  }

}
