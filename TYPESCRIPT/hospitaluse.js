"use strict";
exports.__esModule = true;
var hospitalfile_1 = require("./hospitalfile");
//import * as importAll from './hospitalfile'
var third = new hospitalfile_1.hospital(3, "Ban", "Gee", 34234234); //creating an obj
var fourth = new hospitalfile_1.hospital(4, "Dee", "Yoo", 54545454);
var fifth = new hospitalfile_1.doctor(6, "Surgen");
//console.log(first.id, first.firstName, first.lastName, first.MobNo);
third.detail();
fourth.detail();
fifth.info();
