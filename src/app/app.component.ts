import { WindowStateService } from './services/window-state.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'a-brewingCompany';

  constructor(private windowStateService :WindowStateService) {}

  ngOnInit() {
    this.onResize();
  }

  onResize(){
    this.windowStateService.checkWidth();
  }
}
