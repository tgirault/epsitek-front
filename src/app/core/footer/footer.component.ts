import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faLinkedin, faTwitter);
  }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView();
  }

}
