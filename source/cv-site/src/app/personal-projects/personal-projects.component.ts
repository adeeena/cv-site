import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import {
  fadeIn,
  fadeOut
} from "../carousel/carousel.animations";
import {
  faLinkedin,
  faGithub,
  faDribbble,
  faScribd,
  faStackOverflow,
  faBlogger
} from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

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
export class PersonalProjectsComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faDribbble = faDribbble;
  faScribd = faScribd;
  faStackOverflow = faStackOverflow;
  faBlogger = faBlogger;
  faAddressCard = faAddressCard;


  constructor() { }

  ngOnInit(): void {
  }

}
