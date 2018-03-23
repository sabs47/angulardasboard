import { Component } from '@angular/core';

@Component({
  selector: 'app-goto-top',
  templateUrl: './goto-top.component.html',
  styleUrls: ['./goto-top.component.css']
})
export class GotoTopComponent {

gotoTop(){
  window.scrollTo(0, 0);
}
}
