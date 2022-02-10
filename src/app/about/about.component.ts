import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from "@angular/animations";

import {
  fadeIn,
  fadeOut
} from "../carousel/carousel.animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition("void => *", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("* => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
