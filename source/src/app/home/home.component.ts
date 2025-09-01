import {Component} from '@angular/core';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faAddressCard} from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faAddressCard = faAddressCard;
}
