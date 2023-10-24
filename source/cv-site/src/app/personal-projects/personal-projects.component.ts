import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import {
  fadeIn,
  fadeOut
} from "../carousel/carousel.animations";
import {
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.scss'],
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
export class PersonalProjectsComponent {
  faGithub = faGithub;
  faInstagram = faInstagram;
  
  constructor() { }
}
