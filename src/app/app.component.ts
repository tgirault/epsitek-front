import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateX(-100%)'
      })),
      state('closed', style({
        transform: 'translateX(0)'
      })),
      transition('open => closed', animate('400ms ease-in-out')),
      transition('closed => open', animate('400ms ease-in-out'))
    ]),
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX', style({
        transform: 'rotate(45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      state('hide', style({
        opacity: 0
      })),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class AppComponent {
  /** Le menu est ouvert ? */
  isOpen = false;

  /**
   * Constructeur du composant.
   * @param library La librairie d'icônes FontAwesome
   */
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin, faTwitter, faQuoteLeft);
  }

  /**
   * Afficher/Masquer le menu.
   */
  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
