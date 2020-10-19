import {hospital,doctor} from './hospitalfile'
//import * as importAll from './hospitalfile'

const third = new hospital(3, "Ban", "Gee", 34234234); //creating an obj
let fourth = new hospital(4, "Dee", "Yoo", 54545454);

let fifth = new doctor(6, "Surgen");

//console.log(first.id, first.firstName, first.lastName, first.MobNo);

third.detail();
fourth.detail();

fifth.info()