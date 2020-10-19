import { Component, OnInit } from '@angular/core';

//import services by bk
import { PracticleService } from '../practicle.service';
import { LpuService } from '../lpu.service';

@Component({
  selector: 'app-bca',
  templateUrl: './bca.component.html',
  //give html code within ts
  //template: `<h2>{{title2}}</h2>
  // <p> paragraph content from templete.<br>
  // {{getflower()}}
  // </p>
  // `,


  styleUrls: ['./bca.component.css']
  //give css code within ts file using style
  // styles: ['p{color:red;}',
  //         'h2{color:green;}',
  //       'h1{color:yellow;}']

})
export class BcaComponent implements OnInit {

    title2 = "BCA--CAP917";

    fl1 = "Daffodil";
    getflower(){
        return this.fl1;
    }

    flowers = ["Rose", "Bose", "Hose"];

    employees = [ {"id":"123", "name":"Mathew", "age":30},
    {"id":"127", "name":"John", "age":90},
    {"id":"154", "name":"Bean", "age":60}
    ];


  //student_list = ["James Bond", "Karan Johar", "Sean Watson", "Michael Black"];
  student_list = [];  //ca1-g1 import-PracticleService
  book_array = [];  //ca1-g1 import-PracticleService

  artists_list = []; //import-LpuService



  constructor(
    //added after service
    private prac_srv:PracticleService,
    //import 2nd service file & for Observable
    private lpu_srv:LpuService
  ) { }

  ngOnInit(): void {
    //added after service
    this.student_list=this.prac_srv.getStudents(); //ca1-g1
    this.book_array=this.prac_srv.getBooksList(); //ca1-g1
    //from 2nd service file
    //this.artists_list=this.lpu_srv.getArtists();
    //from observable
    this.lpu_srv.getArtists()
    .subscribe(data=>this.artists_list = data);
  }

}
