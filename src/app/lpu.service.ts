import { Injectable } from '@angular/core';
// added for observable
import { HttpClient } from '@angular/common/http';
import { IEmpclass } from './empclass';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LpuService {
  //using normal service
  artists_arr = [ {"id":"111", "name":"James", "age":30},
  {"id":"222", "name":"Dawn", "age":90},
  {"id":"333", "name":"Sam", "age":60}
  ];

  getArtists(){
    return this.artists_arr;
  }


  constructor() { }

}
