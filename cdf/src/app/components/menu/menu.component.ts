import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuIsShown: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuIsShown = !this.menuIsShown;
    $('#menu').animate({ height: 'toggle' }, 350);
  }

}
