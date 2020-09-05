import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  //templateUrl: './events.component.html',
  template: `
  <div id="div_main">

  <h1> Event Handling</h1>

  <button (click)=btn1_f($event)>GREET 1</button><br>{{greeting1}}<br>
<button on-click=btn2_f($event)>GREET 2</button><br>{{greeting2}}<br>

<button (click)=onDisplay($event)>Display</button><br>
<input #myloginput type="text"><br>
<button (click)=onLog(myloginput.value)>Log</button><br>
<input #email (keyup.enter)=onKeyUp(email.value) type="email"/><br>

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

greeting1="";greeting2="";
onKeyUp(value)
{
console.log(value);
alert("hello World: "+value);
}
btn1_f(event){
console.log(event);
this.greeting1=event;
}
btn2_f(event){
console.log(event);
this.greeting2=event;
}

onDisplay(event){
console.log(event);
alert("hello World");
}
onLog(value){
console.log("hello world");
alert("Hello " +value);
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
