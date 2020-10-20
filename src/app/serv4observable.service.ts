import { Injectable } from '@angular/core';
//added for Observable - built in stuff
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //reactive extention jS
// added for observable - user defined
import { Intf4observable } from './class4observable';

@Injectable({
  providedIn: 'root'
})
export class Serv4observableService {
  //added for Observable
  private _url='./assets/data/json4observable.json';

  constructor(private http: HttpClient) { }

  getJsonDataaa():Observable<Intf4observable[]>
  {
    return this.http.get<Intf4observable[]>(this._url);
  }

}
