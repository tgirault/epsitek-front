import { Company } from './company.data';

/**
 * Classe de description d'une expérience.
 */
export class Experience {
    /** La date de début de l'expérience. */
    startDate: string;
    /** La date de fin de l'expérience. */
    endDate: string;
    /** Le titre de l'expérience. */
    title: string;
    /** Le lieu de l'expérience. */
    place: string;
    /** L'entreprise de l'expérience. */
    company: Company;
    /** La description de l'expériences. */
    description: string;
    /** Les tâches accomplies. */
    tasks: Array<string>;
    /** Les technologies utilisées. */
    technologies: Array<string>;
    /** Les outils utilisés. */
    tools: Array<string>;
    /** Les outils devOps utilisés. */
    devOps: Array<string>;

    /**
     * Constructeur d'une expérience professionnelle.
     * @param startDate la date de début
     * @param endDate la date de fin
     * @param title l'intitulé du poste
     * @param place le lieu d'activité
     * @param company la société
     * @param description la dersciption
     * @param tasks les tâches accomplies
     * @param technologies les technologies utilisées
     * @param tools les outils utilisés
     */
    constructor(
        startDate: string,
        endDate: string,
        title: string,
        place: string,
        company: Company,
        description: string,
        tasks: Array<string>,
        technologies: Array<string>,
        tools: Array<string>,
        devOps: Array<string>
    ) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.title = title;
        this.place = place;
        this.company = company;
        this.description = description;
        this.tasks = tasks;
        this.technologies = technologies;
        this.tools = tools;
        this.devOps = devOps;
    }
}
