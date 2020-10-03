import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Experience } from '../model/experience.data';
import { ExperiencesService } from '../services/experiences.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  /** Liste des expériences professionnelles. */
  experiences: Array<Experience>;

  /**
   * Constructeur du composant.
   * @param experiencesService le service de gestion des expériences
   */
  constructor(private experiencesService: ExperiencesService, private library: FaIconLibrary) {
    library.addIcons(faArrowRight);
  }

  /**
   * Initialisation du composant.
   */
  ngOnInit(): void {
    this.experiences = this.experiencesService.findAll();
  }

}
