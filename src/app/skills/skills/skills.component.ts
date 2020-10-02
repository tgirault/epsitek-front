import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.data';
import { SkillsService } from '../services/skills.service';

/**
 * Composant de gestion des compétences.
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  /** Liste des catégories de compétences. */
  categories: Array<Category>;

  /**
   * Constructeur du composant des compétences.
   * @param skillsService le service de gestion des compétences.
   */
  constructor(private skillsService: SkillsService) { }

  /**
   * Action à l'initialisation du composant.
   */
  ngOnInit(): void {
    this.categories = this.skillsService.findAllCategoriesWithSkills();
  }
}
