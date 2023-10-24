import { Component, OnInit } from '@angular/core';
import { AnimationType } from "../carousel/carousel.animations";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: string[] = [
      'Solutions Architect.',
      'Development Team Lead.',
      'Full Stack Software Developer.',
      'Podcast Creator.',
      'Technology enthusiast.',
      'LGBT+ activist.'
  ];
}
