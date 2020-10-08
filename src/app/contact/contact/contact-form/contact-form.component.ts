import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class ContactFormComponent implements OnInit, OnDestroy {

  /** Groupe de champs du formulaire. */
  contactForm: FormGroup;

  /**
   * Constructeur du composant.
   * @param formBuilder constructeur du formulaire
   * @param messageService service de gestion des messages
   * @param notification composant de notification
   */
  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private notification: MatSnackBar) {
    this.contactForm = formBuilder.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
      recaptcha: new FormControl(null, Validators.required)
    });
  }

  /**
   * Action à l'initialisation du composant.
   */
  ngOnInit(): void {
  }

  /**
   * Action à la destruction du composant.
   */
  ngOnDestroy(): void {
  }

  /**
   * Envoyer un message.
   */
  send(): void {
    if (this.contactForm.valid) {

      // Construction du message
      const message = new Message(
        this.contactForm.get('firstName').value,
        this.contactForm.get('lastName').value,
        this.contactForm.get('company').value,
        this.contactForm.get('email').value,
        this.contactForm.get('phone').value,
        this.contactForm.get('message').value,
        this.contactForm.get('recaptcha').value,
      );
      this.messagesService.send(message).subscribe(
        response => {
          this.notification.open(response.message, null, {
            duration: 3000,
          });
          // Réinitialisation du formulaire
          this.contactForm.reset();
        },
        error => {
          this.notification.open(error.message, null, {
            duration: 3000,
          });
        });

    } else {
      this.notification.open('Les informations de votre message ne sont pas valides.', null, {
        duration: 3000,
      });
    }

  }

}
