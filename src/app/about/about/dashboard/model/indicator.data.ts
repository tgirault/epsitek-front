/**
 * Classe de description d'un indicateur.
 */
export class Indicator {
    /** L'icône de l'indicateur. */
    icon: string;
    /** Le titre de l'indicateur. */
    title: string;
    /** La valeur de l'indicateur. */
    value: string;

    /**
     * Constructeur d'un indicateur.
     * @param icon l'icône de l'indicateur
     * @param title le titre de l'indicateur
     * @param value la valeur de l'indicateur
     */
    constructor(icon: string, title: string, value: string) {
        this.icon = icon;
        this.title = title;
        this.value = value;
    }
}
