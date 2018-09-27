import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }
  addlink1(){
    let val ="none";
    if (window.location.pathname.length == 1)
      val =  "act";
    // document.getElementById('mynavbar').classList.remove('show');
    return val;
    }

  addlink2(){
    let val="none";
    if (window.location.pathname.length > 1)
      if(window.location.pathname.split("/")[1] === "resume")
       val =  "act";
    // document.getElementById('mynavbar').classList.remove('show');
    return val;
  }
  addlink3(){
    let val ="none"
    if (window.location.pathname.length > 1)
      if(window.location.pathname.split("/")[1] === "contact")
      val =  "act";
    // document.getElementById('mynavbar').classList.remove('show');
    return val;
  }

}
