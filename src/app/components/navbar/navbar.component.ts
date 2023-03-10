import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navigationLinks = [ {navItem: 'Home', navLink : ''}, 
          {navItem: 'Student', navLink : 'student'},
          {navItem: 'Search', navLink : 'search'},
          {navItem: 'Lecturer', navLink : 'lecturer'} ];

  activeLink = '';
}
