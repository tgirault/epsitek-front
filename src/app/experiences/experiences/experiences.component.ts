import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Company } from './model/company.data';
import { Experience } from './model/experience.data';
import { CustomersService } from './services/customers.service';
import { ExperiencesService } from './services/experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  /** Liste des expériences professionnelles. */
  experiences: Array<Experience>;
  /** Liste des clients. */
  customers: Array<Company>;

  /**
   * Constructeur du composant.
   * @param experiencesService le service de gestion des expériences
   * @param customersService le service de gestion des clients
   * @param library librairie des icônes Font Awesome
   */
  constructor(
    private experiencesService: ExperiencesService,
    private customersService: CustomersService,
    private library: FaIconLibrary) {
    library.addIcons(faArrowRight);
  }

  /**
   * Initialisation du composant.
   */
  ngOnInit(): void {
    this.experiences = this.experiencesService.findAll();
    this.customers = this.customersService.findAll();
  }

}
