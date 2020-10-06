import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Message } from './model/message.data';
import { MessagesService } from './services/messages.service';

/**
 * Composant formulaire de contact.
 */
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  /** Service de gestion des messages. */
  messagesService: MessagesService;
  /** Groupe de champs du formulaire. */
  contactForm: FormGroup;
  /** Champ email. */
  email = new FormControl('', [Validators.required, Validators.email]);

  /**
   * Constructeur du composant.
   * @param formBuilder constructeur du formulaire
   * @param messageService service de gestion des messages
   * @param notification composant de notification
   */
  constructor(private formBuilder: FormBuilder, private messageService: MessagesService, private notification: MatSnackBar) {
    this.messagesService = messageService;
    this.contactForm = formBuilder.group({
      firstName: '',
      lastName: '',
      company: '',
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

  /**
   * Envoyer un message.
   */
  send(): void {
    if (this.contactForm.valid) {
      const message = new Message(
        this.contactForm.get('firstName').value,
        this.contactForm.get('lastName').value,
        this.contactForm.get('company').value,
        this.contactForm.get('email').value,
        this.contactForm.get('message').value
      );
      this.messagesService.send(message).subscribe(response => {
        this.notification.open(response.company, null, {
          duration: 2000,
        });
      });

    } else {
      this.notification.open('Le formulaire n\'est pas valide.', null, {
        duration: 2000,
      });
    }

  }

}
