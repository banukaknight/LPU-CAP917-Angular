import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  //templateUrl: './events.component.html',
  template: `
  <div id="div_main">

  <h1> Event Handling</h1>


<hr><hr>
<input #num1 type="text">num1<br>
<input #num2 type="text">num2<br>
<button (click)=f_add([num1.value,num2.value])>Add</button>
Sum = {{sum}}


  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>

  `,
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


//--------- calc stuff

sum = 0;
f_add(n1){
  this.sum=Number(n1[0]) + Number(n1[1]);
}







  constructor() { }

  ngOnInit(): void {
  }

}
