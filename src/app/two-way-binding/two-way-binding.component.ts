import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  //d200910 twoway binding
  name1 = '';
  name2 = this.name1+' hello';

  val1 = "";


  constructor() { }

  ngOnInit(): void {
  }

}
