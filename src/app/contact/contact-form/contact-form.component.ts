import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
        this.notification.open(response.message, null, {
          duration: 2000,
        });
        // Réinitialisation du formulaire
        this.contactForm.reset();
      });

    } else {
      this.notification.open('Les informations de votre message ne sont pas valides.', null, {
        duration: 3000,
      });
    }

  }

}
