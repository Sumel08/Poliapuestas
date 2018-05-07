import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import {InstagramService} from './services/instagram.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    InstagramService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
