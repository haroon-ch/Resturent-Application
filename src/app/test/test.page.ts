import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  public test: any  = [{name: 'ali'  , heading :'zaib' , type:'red'}, {name: 'asad'  , heading:'zaib',type:'red'},{name: 'ahmad'  , heading :'zaib', type:'red'},{name: 'ali'  , heading :'zaib',type:'red'}, {name: 'asad'  , heading:'zaib',type:'red'},{name: 'ahmad'  , heading :'zaib', type:'red'}]

  constructor() { }

  ngOnInit() {
  }

}
