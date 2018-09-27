import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  
  }
  addlink1(){
    if (window.location.pathname.length == 1)
      return "act";
    return "none";
  }

  addlink2(){
    if (window.location.pathname.length > 1)
      if(window.location.pathname.split("/")[1] === "resume")
        return "act";
    return "none";
  }
  addlink3(){
    if (window.location.pathname.length > 1)
      if(window.location.pathname.split("/")[1] === "contact")
        return "act";
    return "none";
  }
}
