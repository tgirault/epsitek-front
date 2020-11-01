import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  /** Indicateur de chargement. */
  isLoaded = false;

  /**
   * Constructeur du composant.
   * @param route une route
   */
  constructor(private route: Router) { }

  /**
   * Action à l'initialisation du composant.
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
  }
}
