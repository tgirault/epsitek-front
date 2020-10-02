import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Composant formulaire de contact.
 */
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  /** Groupe de champs du formulaire. */
  contactForm: FormGroup;
  /** Champ email. */
  email = new FormControl('', [Validators.required, Validators.email]);

  /**
   * Constructeur du composant.
   * @param formBuilder constructeur du formulaire
   */
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      firstName: '',
      lastName: '',
      society: '',
      email: '',
      message: '',
    });
  }

  /**
   * Action à l'initialisation du formulaire.
   */
  ngOnInit(): void {
  }

  /**
   * Récupérer les messages d'erreur.
   */
  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Adresse email obligatoire.';
    }
    return this.email.hasError('email') ? 'Adresse email non valide.' : '';
  }

}
