import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,

  RECAPTCHA_LANGUAGE,
  RECAPTCHA_SETTINGS
} from 'ng-recaptcha';
import { ContactCardComponent } from './contact/contact-card/contact-card.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent, ContactCardComponent],
  imports: [
    CommonModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatBadgeModule,
    FontAwesomeModule,
    FlexLayoutModule,
    CoreModule
  ],
  exports: [ContactComponent],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6LdgcNQZAAAAAMG2SfXZTis_3945nXiYrhHIHeaw' } as RecaptchaSettings,
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: 'fr', // use French language
    }
  ],
})
export class ContactModule { }
