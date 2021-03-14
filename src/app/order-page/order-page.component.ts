import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  @ViewChild('themeImage') themeImage: ElementRef<HTMLImageElement>;
  themeImageWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getThemeImageWidth() {
    this.themeImageWidth = this.themeImage.nativeElement.offsetWidth;
  }
}
