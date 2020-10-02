import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Epsitek';
  isShow = false;

  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin, faTwitter, faQuoteLeft);
  }

  toggleDisplay(): void {
    this.isShow = !this.isShow;
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView();
  }
}
