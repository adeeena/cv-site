import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate } from "@angular/animations";
import {
  faDatabase,
  faServer,
  faProjectDiagram,
  faDesktop,
  faPencilRuler,
  faMobileAlt,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

import {
  fadeIn,
  fadeOut
} from "../carousel/carousel.animations";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
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
export class WorkComponent {
  faDownload = faDownload;
  faDatabase = faDatabase;
  faServer = faServer;
  faProjectDiagram = faProjectDiagram;
  faDesktop = faDesktop;
  faPencilRuler = faPencilRuler;
  faMobileAlt = faMobileAlt;
}
