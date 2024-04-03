import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faAddressCard = faAddressCard;
}
