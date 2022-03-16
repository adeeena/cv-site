import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import {
  faLinkedin,
  faGithub,
  faDribbble,
  faScribd,
  faStackOverflow,
  faBlogger,
  faBehance
} from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

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
  faDribbble = faDribbble;
  faScribd = faScribd;
  faStackOverflow = faStackOverflow;
  faBlogger = faBlogger;
  faAddressCard = faAddressCard;
  faBehance = faBehance;
}
