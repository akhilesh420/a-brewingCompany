import { WindowStateService } from './../services/window-state.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit, OnDestroy {

  @ViewChild('themeImage') themeImage: ElementRef<HTMLImageElement>;
  themeImageWidth: number = 0;
  windowWidth: number;

  notifier$ = new Subject();

  constructor(private windowStateService: WindowStateService) { }

  ngOnInit(): void {
    this.windowStateService.screenWidthValue.pipe(takeUntil(this.notifier$))
      .subscribe((width) => {
        this.windowWidth = width;
      });
  }

  getThemeImageWidth() {
    this.themeImageWidth = this.themeImage.nativeElement.offsetWidth;
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
