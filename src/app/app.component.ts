import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  /** Indicateur de chargement. */
  isLoaded = false;

  /** Gestion du consentement des cookies. */
  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;

  /**
   * Constructeur du composant.
   * @param route une route
   * @param cookieConsentService service de gestion du consentement des cookies
   * @param googleAnalyticsService service Google Analytics
   */
  constructor(
    private route: Router,
    private cookieConsentService: NgcCookieConsentService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) { }

  /**
   * Initialisation du composant.
   */
  ngOnInit(): void {
    this.route.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          console.log('navigation starts');
          this.isLoaded = true;

        } else if (event instanceof NavigationEnd) {
          console.log('navigation ends');
          this.isLoaded = false;
        }
      },
      error => {
        this.isLoaded = false;
        console.log(error);
      });

    this.initCookieConsent();
  }

  /**
   * Initialisation de la demande de consentement des cookies.
   */
  private initCookieConsent(): void {
    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.cookieConsentService.popupOpen$.subscribe(
      () => {
        console.log('Ouverture de la popup de gestion du consentement.');
      });

    this.popupCloseSubscription = this.cookieConsentService.popupClose$.subscribe(
      () => {
        console.log('Fermeture de la popup de gestion du consentement.');
      });

    this.initializeSubscription = this.cookieConsentService.initialize$.subscribe(
      (event: NgcInitializeEvent) => {
        console.log('Initialisation de la popup de gestion du consentement.');
      });

    this.statusChangeSubscription = this.cookieConsentService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        console.log('Changement de statut de la popup de gestion du consentement.');

        if (event.status === 'allow') {
          this.allowCookies();
        } else if (event.status === 'deny') {
          this.denyCookies();
        } else if (event.status === 'dismiss') {
          this.denyCookies();
        }
      });

    this.revokeChoiceSubscription = this.cookieConsentService.revokeChoice$.subscribe(
      () => {
        this.denyCookies();
      });

    this.noCookieLawSubscription = this.cookieConsentService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        console.log('No law de la popup de gestion du consentement.');
      });
  }

  /**
   * Autoriser les cookies.
   */
  allowCookies(): void {
    this.googleAnalyticsService.gtag(
      'create', {
      'UA-179522815-1': 'auto'
    });
  }

  /**
   * Refuser les cookies.
   */
  denyCookies(): void {
    console.log('Refuser les cookies.');
    this.googleAnalyticsService.gtag('set', {
      anonymizeIp: true,
    });
  }

  /**
   * Destruction du composant.
   */
  ngOnDestroy(): void {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializeSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}
