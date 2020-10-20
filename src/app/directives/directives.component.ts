import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  arr1 = [2,5,5,3];

  viewMode = "react";

  cars=[{"name":"swift","color":"blue",},
  {"name":"toyota","color":"green"},
  {"name":"bmw","color":"maroon",}];

  array1 = [
      {
        guid: '900ea552-ef68-42cc-b6a6-b8c4dff10fb7',
        age: 32,
        name: 'Powers Schneider',
      },
      {
        guid: '880381d3-8dca-4aed-b207-b3b4e575a15f',
        age: 25,
        name: 'Adrian Lawrence',
      },
      {
        guid: '87b47684-c465-4c51-8c88-3f1a1aa2671b',
        age: 32,
        name: 'Boyer Stanley',
      },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
