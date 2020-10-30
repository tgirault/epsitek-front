import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Category } from './model/category.data';
import { SkillsService } from './services/skills.service';

/**
 * Composant de gestion des compétences.
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  /** Liste des catégories de compétences évaluées. */
  ratedSkills: Array<Category>;
  /** Liste des catégories des compétences avec description. */
  describedSkills: Array<Category>;

  /**
   * Constructeur du composant des compétences.
   * @param skillsService le service de gestion des compétences.
   */
  constructor(private skillsService: SkillsService, private library: FaIconLibrary) {
    library.addIcons(faQuoteLeft);
  }

  /**
   * Action à l'initialisation du composant.
   */
  ngOnInit(): void {
    this.ratedSkills = this.skillsService.findAllCategoriesWithRatedSkills();
    this.describedSkills = this.skillsService.findAllCategoriesWithDescribedSkills();
  }
}
