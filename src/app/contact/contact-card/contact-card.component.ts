import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  constructor(private library: FaIconLibrary, private fb: FormBuilder) {
    library.addIcons(faGithub, faLinkedin, faTwitter);
  }

  ngOnInit(): void {
  }
}
