import { Injectable } from '@angular/core';
//imports for observable
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//import class
import { Class4jsonp } from './class4jsonp'

@Injectable({
  providedIn: 'root'
})
export class Serv4jsonpService {

  constructor(private http: HttpClient) { }

  //Fetch data from server with GET
  fget():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  };

  //Creating a resource with POST
  fpost(opost:Class4jsonp): Observable<any>{
    return this.http.post('https://jsonplaceholder.typicode.com/posts',opost);
  };

  //Updating a resource with PUT
  fput(opost:Class4jsonp): Observable<any>{
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1',opost);
  };

  //Updating a resource with PATCH
  fpatch(opost:Class4jsonp): Observable<any>{
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/1',opost);
  };

  //Deleting a resource
  fdelete(): Observable<any>{
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  };


  //trying other stuff by bk---------------

  //Filtering resources with GET
  fgetfilter():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=2');
  };

  //Listing nested resources with GET
  fgetnested():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users/2/posts');
  };


}
