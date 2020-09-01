import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticleService {

  //CA1-g1
  //Create service file with name student and the inject it for
  //displaying the list of the students studying in the organization.
  getStudents() {
  return ["James Bond", "Karan Johar", "Sean Watson", "Michael Black"];
  }

  //CA1-g1
  //Create an array with name book having properties b_id, b_title,
  //b_author. Display the array content in the web page using ordered list.
  //Also, apply CSS on the array. Implement it using service file.
  getBooksList() {
    return [
      {"b_id":"134", "b_title":"Villege by The Sea", "b_author":"Anita Desai"},
      {"b_id":"152", "b_title":"Harry Potter", "b_author":"JK Rowling"},
      {"b_id":"172", "b_title":"Sherlock Holms", "b_author":"Arthor Connondoil"},
      {"b_id":"185", "b_title":"Walk to Freedom", "b_author":"Nelson Mandela"},
      {"b_id":"196", "b_title":"127 Hours", "b_author":"David Shumer"}
    ];
  }

  constructor() { }
}
