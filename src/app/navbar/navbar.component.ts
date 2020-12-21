import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @ViewChild('openbutton') sidebar: ElementRef<HTMLButtonElement>;
  @ViewChild('closebutton') sidebarsecond: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    this.sidebar_open;
    this.sidebar_close;
  }

  sidebar_open() {
    this.sidebar.nativeElement.style.display = 'block';
    console.log('a');
  }

  sidebar_close() {
    this.sidebarsecond.nativeElement.style.display = 'none';
    console.log('b');
  }

  isMobile() {
    if (window.innerWidth < 768) {
     return true
    }
     else {
     return false
    }
  }

}
