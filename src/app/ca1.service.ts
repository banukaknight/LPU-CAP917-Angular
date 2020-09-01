import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ca1Service {

  //ca1-g2
  //Create service file with name customer and the inject it for displaying
  //the list of the customers with attributes c_id,c_name, c_city, c_state.
  customers_arr = [
		{"c_id":"512", "c_name":"James Scott", "c_city":"Jalandhar", "c_state":"Panjab"},
		{"c_id":"615", "c_name":"Dave John", "c_city":"Phagwara", "c_state":"Panjab"},
		{"c_id":"642", "c_name":"Anne Frank", "c_city":"Delhi", "c_state":"Delhi"},
		{"c_id":"741", "c_name":"Sahil Silva", "c_city":"New Delhi", "c_state":"Delhi"},
		{"c_id":"851", "c_name":"Sri Khant", "c_city":"Manali", "c_state":"Himal"},
		{"c_id":"981", "c_name":"John Cena", "c_city":"Galle", "c_state":"Cylon"}
	];

	getCustomers(){
		return this.customers_arr;
	}

  //Create an array with name staff having properties s_id, s_name, s_skills.
  //Display the array content in the web page using ordered list.
  //Also, apply CSS on the array. Implement it using service file.
  staff_arr = [
		{"s_id":"12", "s_name":"Kate Maya", "s_skills":["Java", "PHP", "PyCharm","CSS"] },
		{"s_id":"14", "s_name":"David Boi", "s_skills":["HTML", "Angular","NOT","GO"] },
		{"s_id":"15", "s_name":"Mich Dooe", "s_skills":["AngularJS","C++","C","CSS"]},
		{"s_id":"18", "s_name":"Emma Watt", "s_skills":["Java","PHP","Python","JavaScript"]},
		{"s_id":"21", "s_name":"Karan Jor", "s_skills":["TypeScript","GO","C#","C++"]},
		{"s_id":"24", "s_name":"Jean Been", "s_skills":["Apache","GitHub","PyCharm","TypeScript"]},
	];

	getStaff(){
		return this.staff_arr;
	}

  constructor() { }
}
