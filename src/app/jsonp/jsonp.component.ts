import { Component, OnInit } from '@angular/core';

//imports by bk for Observable
import { Serv4jsonpService } from "../serv4jsonp.service";
import { Class4jsonp } from "../class4jsonp";

@Component({
  selector: 'app-jsonp',
  templateUrl: './jsonp.component.html',
  styleUrls: ['./jsonp.component.css']
})
export class JsonpComponent implements OnInit {

  lstpost: Class4jsonp[];
  objPost: Class4jsonp;
  objPut: Class4jsonp;
  objPatch: Class4jsonp;
  message: string;

  lstpostfilter: Class4jsonp[];
  lstpostnested: Class4jsonp[];

  constructor(private _p:Serv4jsonpService) { }

  ngOnInit(): void {

    //Fetch data from server with GET
    this._p.fget().subscribe (data => {this.lstpost=data;}
      ,error=>{alert('An unexpected error occur-get');
      console.log(error);}
    );

    //sample object to be used in post, put,
    var opost = new Class4jsonp();
    opost.body="Hello World";
    opost.title="LPU post data";
    opost.userId=5;

    //Creating a resource with POST
    this._p.fpost(opost).subscribe (data => {this.objPost = data;}
      ,error=>{alert('An unexpected error occur-post');
      console.log(error);}
    );

    //Updating a resource with PUT
    opost.title="LPU put data";
    this._p.fput(opost).subscribe (data => {this.objPut=data;}
      ,error=>{alert('An unexpected error occur-put');
      console.log(error);}
    );

    //Updating a resource with PATCH
    opost.title="LPU patched data";
    this._p.fpatch(opost).subscribe(data => {this.objPatch = data;}
      ,error=>{alert('An unexpected error occur-patch');
      console.log(error);}
    );

    //Deleting a resource
    this._p.fdelete().subscribe (data =>{ this.message="resource deleted succesfully";}
      ,error=>{
        if(error.status==404){alert('post not exisit-del'); console.log(error);}
        else{alert('post already deleted-del'); console.log(error);}
      }
    );


    //trying other stuff by bk---------
    //Filtering resources with GET
    this._p.fgetfilter().subscribe (data => {this.lstpostfilter=data;}
      ,error=>{alert('An unexpected error occur-get');
      console.log(error);}
    );

    //Listing nested resources with GET
    this._p.fgetnested().subscribe (data => {this.lstpostnested=data;}
      ,error=>{alert('An unexpected error occur-get');
      console.log(error);}
    );

  }

}
