import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('menuIcon') menuIcon!: ElementRef;

  cheminLogo: any = './assets/images/LOGO_BOUCHERIE_JTalon.png';

  burgerMenu() {
    this.navbar.nativeElement.classList.toggle('active');
  }
}
