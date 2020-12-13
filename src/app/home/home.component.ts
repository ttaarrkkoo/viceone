import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  sidebar_open() {
angular.element(document.getElementById('sidebar').style.display = 'block');
  }

  sidebar_close() {
    document.getElementById('sidebar').style.display = 'none';
  }


  isMobile() {
    if (window.innerWidth < 768)
      return true
  }

}
