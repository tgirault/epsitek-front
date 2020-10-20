import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Service } from './model/service.data';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  /** Statut d'ouverture du panel. */
  panelOpenState = false;
  /** Liste des prestations. */
  prestations: Array<Service>;

  /**
   * Constructeur du composant.
   * @param library la librairie des icônes Font Awesome
   */
  constructor(private library: FaIconLibrary, private servicesService: ServicesService) {
    library.addIcons(faArrowRight);
  }

  /**
   * Initialisation du composant.
   */
  ngOnInit(): void {
    this.prestations = this.servicesService.findAll();
  }

}
