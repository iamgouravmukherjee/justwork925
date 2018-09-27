import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgpath = "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_woman_bun_shirt_girl-128.png";
 
  constructor() { }

  ngOnInit() {
    this.move();
  }

   move() {
    var elem  = document.getElementById("html"),elem1  = document.getElementById("css"),elem2  = document.getElementById("jquery"),elem3  = document.getElementById("php"),elem4  = document.getElementById("python"),elem5  = document.getElementById("mysql"),htmlP  = document.getElementById("htmlP"),cssP  = document.getElementById("cssP"),jqueryP  = document.getElementById("jqueryP"),phpP  = document.getElementById("phpP"),pythonP  = document.getElementById("pythonP"),mysqlP  = document.getElementById("mysqlP")
    var html = 86, css = 83,jquery = 75,php=43,python=69,mysql=63,width = 1,width1=1,width2=1,width3=1,width4=1,width5=1;
    var id = setInterval(one, 20);
    var id1 = setInterval(two, 20);
    var id2 = setInterval(three, 20);
    var id3 = setInterval(four, 20);
    var id4 = setInterval(five, 20);
    var id5 = setInterval(six, 20);
 
    function one() {
      if (width >= html) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        htmlP.innerHTML = width + '%';
      }
 
    }
    function two() {
        if (width1 >= css) {
          clearInterval(id1);
        } else {
          width1++;
          elem1.style.width = width1 + '%';
          cssP.innerHTML = width1 + '%';
        }
 
      }
      function three() {
        if (width2 >= jquery) {
          clearInterval(id2);
        } else {
          width2++;
          elem2.style.width = width2 + '%';
          jqueryP.innerHTML = width2 + '%';
        }
 
      }
      function four() {
        if (width3 >= php) {
          clearInterval(id3);
        } else {
          width3++;
          elem3.style.width = width3 + '%';
          phpP.innerHTML = width3 + '%';
        }
 
      }
      function five() {
        if (width4 >= python ) {
          clearInterval(id4);
        } else {
          width4++;
          elem4.style.width = width4 + '%';
          pythonP.innerHTML = width4 + '%';
        }
 
      }
      function six() {
        if (width5 >=  mysql) {
          clearInterval(id5);
        } else {
          width5++;
          elem5.style.width = width5 + '%';
          mysqlP.innerHTML = width5 + '%';
        }
 
      }
 
  }


}

