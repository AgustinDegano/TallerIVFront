import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userRole : string | null = 'user';
  constructor( @Inject(PLATFORM_ID) private plataformId: Object

  ){
    if (isPlatformBrowser(this.plataformId)){
      const role = localStorage.getItem('role');
      if (role){
        this.userRole = role;
      } else{
        this.userRole = 'user';
      }
    }
  }

}
