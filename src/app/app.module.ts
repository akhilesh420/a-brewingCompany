import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    OrderPageComponent,
    AboutUsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
