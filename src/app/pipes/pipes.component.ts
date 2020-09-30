import { Component, OnInit } from '@angular/core';

import { Ca1Service } from '../ca1.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  inp1 = "Sample TEXT hERee!";
  inp2 = 0.4315113;
  inp3 = "2020-09-20";

  artists_arr = [ {"id":"111", "name":"James", "age":30},
  {"id":"222", "name":"Dawn", "age":90},
  {"id":"333", "name":"Sam", "age":60}
  ];

  val4 = "ABcDeFgH";

  keyupevent1(input1){
    this.inp1 = input1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
