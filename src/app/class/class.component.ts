import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

	myid1 = "id1";
	myid2 = "id1";

	isDisabled=true;
	value1 = "Harry"

  constructor() { }

  ngOnInit(): void {
  }

}
