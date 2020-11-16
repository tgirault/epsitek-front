import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateX(-100%)'
      })),
      state('closed', style({
        transform: 'translateX(0%)'
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
export class MenuComponent implements OnInit {
  /** Le menu est ouvert ? */
  isOpen = false;

  /** Le fragment actif. */
  activeFragment = this.route.fragment.pipe(share());

  /**
   * Constructeur du composant.
   * @param route route active
   * @param translate service de gestion des traductions
   */
  constructor(public route: ActivatedRoute, private translate: TranslateService) { }

  ngOnInit(): void {
  }

  /**
   * Afficher/Masquer le menu.
   */
  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
