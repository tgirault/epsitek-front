import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
   * Constructeur du composant.
   * @param library La librairie d'icônes FontAwesome
   * @param translate service de gestion des traductions
   */
  constructor(private library: FaIconLibrary, private translate: TranslateService) {
    library.addIcons(faGithub, faLinkedin, faTwitter, faQuoteLeft);
  }

  ngOnInit(): void {
  }

}
