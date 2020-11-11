import { Component, OnInit } from '@angular/core';
//import services by bk
import { Serv4pracService_ITJokes } from "../../serv4prac.service";
//import { Class4prac_Jokes } from '../../class4prac';
//additional imports for form input-output stuff - not needed for this implementation
//import { NgModule, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-prac1',
  templateUrl: './prac1.component.html',
  styleUrls: ['./prac1.component.css']
})
export class Prac1Component implements OnInit {

  ITjokes = [];
  constructor(private _p:Serv4pracService_ITJokes) {
    this.ITjokes = this._p.getJokesList();
  }

  //for joke-form only works if form is in seperate module
  //@Output() jokeCreated = new EventEmitter<Class4prac_Jokes>();

  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }

  createJoke(s: string, d: string) {
    //this.jokeCreated.emit(new Class4prac_Jokes("Set","punch"));
    this.ITjokes.unshift({setup:s, delivery:d});
  }


  //hide & display joke
  toggle(joke) {
    joke.hide = !joke.hide;
  }

  ngOnInit(): void {
  }

}
