/**
 * Classe de description d'un indicateur.
 */
export class Indicator {
    /** L'icône de l'indicateur. */
    icon: string;
    /** La couleur de l'icône. */
    color: string;
    /** Le titre de l'indicateur. */
    title: string;
    /** La valeur de l'indicateur. */
    value: string;
    /** Suffixe de la valeur. */
    suffix?: string;

    /**
     * Constructeur d'un indicateur.
     * @param icon l'icône de l'indicateur
     * @param color la couleur de l'icône
     * @param title le titre de l'indicateur
     * @param value la valeur de l'indicateur
     * @param suffix le suffixe de la valeur de l'indicateur
     */
    constructor(icon: string, color: string, title: string, value: string, suffix?: string) {
        this.icon = icon;
        this.color = color;
        this.title = title;
        this.value = value;
        this.suffix = suffix;
    }
}
