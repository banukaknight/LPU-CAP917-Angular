import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  //templateUrl: './binding.component.html',
  template: `
  <div id="div_main">
  <h1><u>Binding stuff</u></h1>
<p>Data-binding is a mechanism for coordinating what users see,
specifically with application data values. While you could push
values to and pull values from HTML, the application is easier
to write, read, and maintain if you turn these tasks over to a
binding framework. </p>
<h5>https://angular.io/guide/binding-syntax</h5>

<tr><td>
<pre>
Interpolation
Property
Attribute
Class
Style
</pre></td>
<td><pre>
{{expression}
[target]="expression"
bind-target="expression"
</pre></td></tr>

  <h3 class="t_c1">HTML attribute - string constant</h3>
  <input type="button" value="My normal button" />
  <hr />

  <h3 class="{{var2}}">String Interpolation</h3>
  <p><span>"{{interpolationTitle}}" is the <i>interpolated</i> title.</span></p>
  <p>Interpolation and property
  binding can set only properties, not attributes.</p>
  <hr />

  <p>"<span [innerHTML]="interpolationTitle"></span>" is the <i>property bound</i> title.</p>
  <h3 [class]="var3">Property binding - class - one way</h3>
  <h3 [id]="var4">Property binding - id</h3>
  <input type="button" [value]="var5" /><br>
  <input [disabled]="bool1" type=text value ="Sam"> disabled<br>
  <img [src]="itemImageUrl"> property bind - img <br>
  <img bind-src="itemImageUrl"> bind- prefix alternative<br>

  <p>The most common property binding sets an element property to
  a component property value.</p>
  <hr />

  <button [attr.aria-label]="var6"> Attribute binding</button>
  <p>Attribute binding syntax resembles property binding, but instead
  of an element property between brackets, start with the prefix attr,
  followed by a dot (.), and the name of the attribute. You then set the
  attribute value, using an expression that resolves to a string, or
  remove the attribute when the expression resolves to null.</p>
  <hr />

  <h3 [class.t_c1]="bool1">Single Class binding - true</h3>
  <h3 [class.t_c1]="bool2">Class binding - false. class not applied</h3>
  <h6>Input type = boolean, undefined, null</h6>
  <p>To create a single class binding, start with the prefix class
  followed by a dot (.) and the name of the CSS class. Angular adds
  the class when the bound expression is truthy, and it removes if falsy</p>
  <hr />

  <p>To create a binding to multiple classes, use a generic [class]
  binding without the dot (for example, [class]="classExpr"). The
  expression can be a space-delimited string of class names, or you can
  format it as an object with class names as the keys and truthy/falsy
  expressions as the values.</p>
  <h3 [class]="var7">Multi-Class binding - string</h3>
  <h3 [class]="var8">Multi-Class binding - key value pair [class:bool]</h3>
  <h3 [class]="arr1">Multi-Class binding - Array of string classes</h3>
  <h6>Input type = string containg class names, key value pairs [bool:string], array of strings</h6>
  <h4 [ngClass]="obj9">class binding - Object ngClasse</h4>

  <p>The NgClass directive can be used as an alternative to direct
  [class] bindings. but prefer not used.</p>
  <hr />

  <h3 style="color: blue; letter-spacing: 5px;">plain HTML - Style attribute</h3>

  <h3 [style.letter-spacing] ="spc1">Single style binding - ltr-spce</h3>
  <h3 [style.color] ="spc3">Single style binding - color</h3>
  <h6>Input type = string, undefined, null - ex- 100px</h6>
  <h2 [style.color]="bool1?'red':'yellow'">style binding--conditiond</h2>



  <h6 [style.letter-spacing.px] ="spc2">Single style binding with units - px</h6>
  <h6 [style.letter-spacing.em] ="spc2">Single style binding with units - em</h6>
  <h6>Input type = number, undefined, null - ex- 100px or 10em</h6>
  <hr />

  <h6 [style]="var9">Multi-style binding - string</h6>
  <h6 [style]="obj10">Multi-style binding - key-value Object</h6>
  <h6 [style]="arr2">Multi-style binding - array - not work</h6>
  <h6 [ngStyle]="obj10">Style binding - Object ngStyle</h6>

  <br><br>
  <h2>Styling Precedence</h2>
  <p>When there are multiple bindings to the same class name or style
  property, Angular uses a set of precedence rules to resolve conflicts
  and determine which classes or styles are ultimately applied to the element.</p>
  <textarea rows="4" cols="100">
  1.Template bindings
  Property binding (for example, <div [class.foo]="hasFoo" > or <div [style.color]="color" >)
  Map binding (for example, <div [class]="classExpr" > or <div [style]="styleExpr" >)
  Static value (for example, <div class="foo" > or <div style="color: blue" .>)

  2.Directive host bindings
  Property binding (for example, host: {'[class.foo]': 'hasFoo'} or host: {'[style.color]': 'color'})
  Map binding (for example, host: {'[class]': 'classExpr'} or host: {'[style]': 'styleExpr'})
  Static value (for example, host: {'class': 'foo'} or host: {'style': 'color: blue'})

  3.Component host bindings
  Property binding (for example, host: {'[class.foo]': 'hasFoo'} or host: {'[style.color]': 'color'})
  Map binding (for example, host: {'[class]': 'classExpr'} or host: {'[style]': 'styleExpr'})
  Static value (for example, host: {'class': 'foo'} or host: {'style': 'color: blue'})
  </textarea>
  <p>dynamic binding using squre-brac has more precedence over static html property</p>


<h1>d200910 Two way binding</h1>

Two way bind <input [(ngModel)]="name1" type="text">
<h2>Input was: {{name1}}</h2>
<h2>Name 2 is: {{name2}}</h2>






<br><br><br><br><br><br><br>
</div>
  `,
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


//d200910 twoway binding
name1 = 'ee';
name2 = this.name1+'hello';





  constructor() { }

  ngOnInit(): void {
  }

}
