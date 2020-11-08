import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'epsitek.fr'
  },
  position: 'bottom-left',
  theme: 'block',
  palette: {
    popup: {
      background: '#17365d',
      text: '#ffffff',
      link: '#ffffff'
    },
    button: {
      background: '#3e8914',
      text: '#ffffff',
      border: 'transparent'
    }
  },
  type: 'opt-out',
  content: {
    message: 'Ce site web utilise des cookies pour analyser le trafic et vous assurer la meilleure expérience de navigation.',
    dismiss: 'OK, j\'ai compris!',
    deny: 'Refuser',
    link: 'Plus d\'information',
    href: 'https://www.epsitek.fr/mentions-legales',
    policy: 'Politique des Cookies',
    header: 'Cookies sur le site!',
    allow: 'Autoriser les cookies'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    NgxGoogleAnalyticsModule.forRoot(environment.ga),
    NgxGoogleAnalyticsRouterModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
