import { Component, OnInit } from '@angular/core';
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
  constructor(private experiencesService: ExperiencesService) { }

  /**
   * Initialisation du composant.
   */
  ngOnInit(): void {
    this.experiences = this.experiencesService.findAll();
  }

}
