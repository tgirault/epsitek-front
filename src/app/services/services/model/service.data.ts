/**
 * Classe de description d'un service.
 */
export class Service {
    /** L'icône du service. */
    icon: string;
    /** Couleur de l'icône. */
    color: string;
    /** Le titre du service. */
    title: string;
    /** La description du service. */
    description: string;
    /** Les tâches du service. */
    items: Array<string>;

    /**
     * Constructeur d'un service.
     * @param icon l'icône du service
     * @param color la couleur de l'icône
     * @param title le titre du service
     * @param description la description du service
     * @param items les items du service
     */
    constructor(
        icon: string,
        color: string,
        title: string,
        description: string,
        items: Array<string>
    ) {
        this.icon = icon;
        this.color = color;
        this.title = title;
        this.description = description;
        this.items = items;
    }
}
