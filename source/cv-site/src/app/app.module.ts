import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Utf8EmojisToImagesModule } from 'ng-utf8-emojis-to-images';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BioComponent } from './bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    Utf8EmojisToImagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
