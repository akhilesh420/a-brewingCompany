import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowStateService {

  public tabletCheck: boolean;
  public mobileCheck: boolean;

  public screenWidthValue = new BehaviorSubject<number>(null);

  constructor() { }

  public checkWidth() {
    var width = window.innerWidth;

    width < 1125 ? this.tabletCheck = true : this.tabletCheck = false;
    width < 550 ? this.mobileCheck = true : this.mobileCheck = false;

    this.screenWidthValue.next(width);
  }
}
