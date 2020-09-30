import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  // template: `
  // `,
  styleUrls: ['./events.component.css']
  // styles: [`
  //   #div_main{
  //     background-color: lightgreen;
  //     border: 2px solid red;
  //     padding: 5px;
  //   }
  // `]
})
export class EventsComponent implements OnInit {

event1="";
val2 = "";
val5 = "sample";
val6 = "";
val6event = "";

clicked1st(eventval1){
  this.event1=eventval1;
  console.log("Button event is: "+ eventval1); //log message to console
  alert("you pressed button: " + eventval1);
  }

clicked2nd(input2){
  this.val2 = input2; //set locak value
}

clicked3rd(input3){
  alert("you entered: " + input3); //alert box
}

clicked4th(input4){
  console.log("you entered: " + input4); //log data
}

keyup1(input5){ //keyup event
  this.val5 = input5;
}

keyup2(input6){ //pass multiple values
  this.val6 = input6[0];
  this.val6event = input6[1];
}




//--------- calc stuff
sum = 0;
f_add(n1){
  this.sum=Number(n1[0]) + Number(n1[1]);
}







  constructor() { }

  ngOnInit(): void {
  }

}
