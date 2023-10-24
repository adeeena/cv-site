import { Component, Input, OnInit } from "@angular/core";
import { trigger, transition, useAnimation, state, style, animate } from "@angular/animations";

import {
  fadeIn,
  fadeOut
} from "./carousel.animations";

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger('flyInOut', [
      transition("void => *", [
        useAnimation(fadeIn, { params: { time: "1000ms" } })
      ]),
      transition("* => void", [
        useAnimation(fadeOut, { params: { time: "1000ms" } })
      ]),
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: string[] = [];

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  ngOnInit() {
    setInterval(() => { this.onNextClick(); }, 5000);
  }
}