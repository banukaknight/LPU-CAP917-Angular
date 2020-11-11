import { Injectable } from '@angular/core';
//imports for observable
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import class
import { Class4prac_Friends } from './class4prac';


@Injectable({
  providedIn: 'root'
})

export class Serv4pracService_Friends {
  constructor(private http: HttpClient) { }

  //Fetch data from server with GET - 20 random jokes
  fgetquotes():Observable<any>{
    return this.http.get('https://friends-quotes-api.herokuapp.com/quotes/20');
  };
}

//------- a class that returns simple list of jokes--------------------//
export class Serv4pracService_ITJokes {
  getJokesList() {
    return [
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "Why are modern programming  languages so materialistic?",
          "delivery": "Because they are object-oriented.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 21,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "Why do programmers confuse Halloween and Christmas?",
          "delivery": "Because Oct 31 = Dec 25",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 11,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "How did you make your friend rage?",
          "delivery": "I implemented a greek question mark in his JavaScript code.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 149,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "Hey, wanna hear a joke?",
          "delivery": "Parsing HTML with regex.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 10,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "What is the most used language in programming?",
          "delivery": "Profanity.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 195,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "What's the object-oriented way to become wealthy?",
          "delivery": "Inheritance.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 46,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "What is the best prefix for global variables?",
          "delivery": "//",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 32,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "Why does no one like SQLrillex?",
          "delivery": "He keeps dropping the database.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 13,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "Why did the programmer quit his job?",
          "delivery": "Because he didn't get arrays.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 16,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "Why did the programmer jump on the table?",
          "delivery": "Because debug was on his screen.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 216,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "Why do programmers wear glasses?",
          "delivery": "Because they need to C#",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 50,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": ".NET developers are picky when it comes to food.",
          "delivery": "They only like chicken NuGet.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 49,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "How do you know God is a shitty programmer?",
          "delivery": "He wrote the OS for an entire universe, but didn't leave a single useful comment.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 19,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "How do you generate a random string?",
          "delivery": "Put a Windows user in front of Vim and tell him to exit.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 129,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "Why is 6 afraid of 7 in hexadecimal Canada?",
          "delivery": "Because 7 8 9 A?",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 7,
          "lang": "en"
      },
      {
          "category": "Programming",
          "type": "twopart",
          "setup": "Hey baby I wish your name was asynchronous...",
          "delivery": "... so you'd give me a callback.",
          "flags": {
              "nsfw": false,
              "religious": false,
              "political": false,
              "racist": false,
              "sexist": false
          },
          "id": 54,
          "lang": "en"
      }
    ];
};
  constructor() { }

}// Serv4pracService_ITJokes -end-----

//
// //--------- implementing domain modal concept (Jokes)
// export class Serv4pracService_Joke {
//   setup : string;
//   delivery: string;
//   hide: boolean;
// 
//   constructor(setup:string, delivery: string){
//     this.setup = setup;
//     this.delivery = delivery;
//     this.hide = true;
//   }
//   toggle2() {this.hide = !this.hide;}
// }// Serv4pracService_Jokes2-end----------
//
// //JokeListComponent
// export class Serv4pracService_JokesList {
//  jokesLIST: Serv4pracService_Joke[];
//  constructor() {
//    this.jokesLIST =[
//      new Serv4pracService_Joke ("Hello", "There"),
//      new Serv4pracService_Joke ("Hello2", "There2")
//    ];
//  }
//
//  getJokes(){
//    return jokesLIST;
//  }
// }
