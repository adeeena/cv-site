import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from "@angular/animations";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  fadeIn,
  fadeOut
} from "../carousel/carousel.animations";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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

export class ContactComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
