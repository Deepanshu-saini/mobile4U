import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchvalue="";
  changevalue(eventData:Event){
    this.searchvalue=(<HTMLInputElement>eventData.target).value;
  }
  sayHello(varp:HTMLInputElement){
    alert("You searched for: "+ varp.value)
  }
}
