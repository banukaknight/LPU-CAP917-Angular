import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LpuService {

  artists_arr = [ {"id":"111", "name":"James", "age":30},
  {"id":"222", "name":"Dawn", "age":90},
  {"id":"333", "name":"Sam", "age":60}
  ];

  getArtists(){
    return this.artists_arr;
  }

  constructor() { }
}
