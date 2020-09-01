export{};
let message = "welcome home";
/** let message = "welcome friend"; //cannot change */
message = "welcome friend";
console.log(message);

console.log("----");
var isDone: boolean = false;
var lines: number = 42;
var name: string = "Hello World";

function bigHorribleAlert(): void {
  alert("I am annoying box!");
}

//bigHorribleAlert();

var message2 = 55;
console.log(message2);
/** var message2 = "welcome back"; // not allowed redeclare
message2 = "try change type"; // not work either */
console.log(message2);

console.log("----");
const message3 = "hello home";
/** const message3 = "hello back"; //doesnt work */
/**  message3 = "hello back"; //doesnt work */
console.log(message3);

console.log("----");
var vari2: any  = 5;
console.log(typeof(vari2));
vari2 = "try this string";
console.log(vari2);
console.log(typeof(vari2));
