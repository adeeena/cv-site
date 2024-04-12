import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private router:Router) {}

  getRoute(): string {
	  if (this.router.url === '/' || this.router.url === '/contact') {
	      return "white";
	  } else {
	      return "black"
	  }
  }
}
