import { Component, OnInit } from '@angular/core';
//imports by bk for Observable
import { Serv4pracService_Friends } from "../../serv4prac.service";
import { Class4prac_Friends } from '../../class4prac';

@Component({
  selector: 'app-prac2',
  templateUrl: './prac2.component.html',
  styleUrls: ['./prac2.component.css']
})
export class Prac2Component implements OnInit {

    friendsquotes: Class4prac_Friends[];

    constructor(private _p:Serv4pracService_Friends) {

      //Fetch data from server with GET - friends-API
      this._p.fgetquotes().subscribe (data => {this.friendsquotes=data;}
        ,error=>{alert('An unexpected error occur-get');
        console.log(error);}
      );

      //attempt to add hide property
      for (let q in this.friendsquotes){
        q['hide'] = true; //this part of code make no change
      }



    }


    //check for friend-quote character
    checkfriend(q,friend){
      if(q.character == friend){
        q.hide = true,
        //alert('YES! It was: '+friend);
        q.msg = 'YES! '+friend+' said it!';
        q.cls = 'p-2 m-2 bg-success text-dark';
      }else{
        //alert("NO! It wasn't: "+friend);
        q.msg = 'No! It wasn\'t: '+friend;
        q.cls = 'p-2 m-2 bg-danger text-warning';
      }
    }




    ngOnInit(): void {
    }

  }
