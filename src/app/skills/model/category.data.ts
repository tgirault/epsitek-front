import { Skill } from './skill.data';

/**
 * Classe de description d'une catégorie de compétences.
 */
export class Category {
    /** Le nom de la catégorie de compétences. */
    name: string;
    /** La liste des compétences de la catégorie. */
    skills: Array<Skill>;

    /**
     * Constructeur d'une catégorie de compétences.
     * @param name le nom de la catégorie de compétences
     * @param skills la liste des compétences de la catégorie
     */
    constructor(name: string, skills: Array<Skill>) {
        this.name = name;
        this.skills = skills;
    }
}
