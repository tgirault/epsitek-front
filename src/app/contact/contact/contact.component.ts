import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private library: FaIconLibrary, private fb: FormBuilder) {
    library.addIcons(faGithub, faLinkedin, faTwitter);

    this.contactForm = fb.group({
      firstName: '',
      lastName: '',
      society: '',
      email: '',
      message: '',
    });
  }

  ngOnInit(): void {
  }

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Adresse email obligatoire.';
    }
    return this.email.hasError('email') ? 'Adresse email non valide.' : '';
  }
}
