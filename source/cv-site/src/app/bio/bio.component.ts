import {Component} from '@angular/core';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faAddressCard} from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.scss'],
    standalone: false
})
export class BioComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faAddressCard = faAddressCard;
}
