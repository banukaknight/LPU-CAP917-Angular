import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  // template: `
  // /*moved to html file*/
  // `,
  //styleUrls: ['./binding.component.css']
  styles: [`
    h1{color:yellow;}

    /*HTML attribute - string constant*/
    .t_c1{ color:green; font-style:italic;}

    /*string Interpolation*/
    .t_c2{ color:maroon; }

    /*Property binding class & id - one way*/
    .t_c3{ color:blue; }
    #t_id1{ color:red; }

    .t_c4{ background-color:powderblue; }


    #div_main{
      background-color: lightgreen;
      border: 2px solid red;
      padding: 5px;
    }
    `]
})
export class BindingComponent implements OnInit {

/*string Interpolation*/
var2 = 't_c2';
/*Property binding*/
var3 = 't_c3';
var4 = 't_id1';
var5 = "Button prop-bind";
var6 = "label6";
interpolationTitle = "Hello World!";

itemImageUrl = "./assets/bg-pic/lpupng-sm.png";

bool1 = true;
bool2 = false;

/*Multi-class binding*/
var7 = "t_c3 t_c4"; //string
var8 = {t_c1:true, t_c4:true, t_c2:false}; //key-value
arr1 = ['t_c2', 't_c4']; //array String
obj9 = {'t_c1':true, t_c4:true, 't_c2':false}; //object for ngClass


spc1 = "2px"; //space val+unit
spc2 = 1;
spc3 = "green";
var9 = "letter-spacing:1em; color:red; background-color:yellow"; //style string
obj10 = {"letter-spacing":"0.5em", "color":"blue", "background-color":"pink"}; //key-value onject
arr2 = [ "color","red"]; //not work




  constructor() { }

  ngOnInit(): void {
  }

}
