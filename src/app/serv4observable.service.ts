import { Injectable } from '@angular/core';
//added for Observable - built in stuff
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //reactive extention jS
// added for observable - user defined
import { Class4observable, Intf4observable2 } from './class4observable';


@Injectable({
  providedIn: 'root'
})
export class Serv4observableService {
  //added for Observable -local json
  private _url='./assets/data/json4observable.json';

  //observable - json file from web
  private _url2= 'https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient) { }
  //for local json
  //func_name(): returntype<passing in an array of this type[]>
  getJsonDataaa():Observable<Class4observable[]>
  {
    return this.http.get<Class4observable[]>(this._url);
  }

  //for web json
  getJsonDataaa2():Observable<Intf4observable2[]>
  {
    return this.http.get<Intf4observable2[]>(this._url2);
  }




}
