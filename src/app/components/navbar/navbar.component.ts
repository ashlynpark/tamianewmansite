import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedMenuItem: string = 'home';

  constructor(private router: Router) { 
    if (this.router.url.includes('/about')) {
      this.selectedMenuItem = 'about';
    } else if (this.router.url.includes('/advocacy')) {
      this.selectedMenuItem = 'advocacy';
    } else if (this.router.url.includes('/portfolio')) {
      this.selectedMenuItem = 'portfolio';
    }
  }
}
