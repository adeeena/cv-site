import { Component, OnInit } from '@angular/core';
import { Slide } from "../carousel/carousel.interface";
import { AnimationType } from "../carousel/carousel.animations";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: Slide[] = [
    {
      headline: "Full Stack Software Developer."
    },
    {
      headline: "Podcast Creator."
    },
    {
      headline: "Technology enthusiast.",
  	},
    {
      headline: "Design. Creativity. Innovation.",
    },
    {
      headline: "Development Team Lead / Architect."
    },
  ];
}
