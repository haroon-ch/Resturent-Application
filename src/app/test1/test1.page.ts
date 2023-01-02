import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.page.html',
  styleUrls: ['./test1.page.scss'],
})
export class Test1Page implements OnInit {
  public test: any  = [{name: 'ali'  , heading :'zaib' , type:'blue'}, {name: 'asad'  , heading:'zaib',type:'blue'},{name: 'ahmad'  , heading :'zaib', type:'blue'},{name: 'ali'  , heading :'zaib',type:'blue'}, {name: 'asad'  , heading:'zaib',type:'blue'},{name: 'ahmad'  , heading :'zaib', type:'blue'}]

  constructor() { }

  ngOnInit() {
  }

}
