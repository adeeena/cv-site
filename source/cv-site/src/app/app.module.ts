import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {Utf8EmojisToImagesModule} from "./lib/utf8-emojis-to-images.module";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BioComponent} from './bio/bio.component';
import { NgxSplideModule } from 'ngx-splide';
import { MetroMapComponent } from './metro-map/metro-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    BioComponent,
    MetroMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    Utf8EmojisToImagesModule,
    NgxSplideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
