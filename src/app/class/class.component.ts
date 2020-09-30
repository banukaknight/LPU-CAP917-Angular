import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

arr1 = [2,5,5,3];

viewMode = "react";

cars=[{"name":"swift","color":"blue",},
{"name":"toyota","color":"green"},
{"name":"bmw","color":"maroon",}];



  constructor() { }

  ngOnInit(): void {
  }

}
