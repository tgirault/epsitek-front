/**
 * Classe de description d'une compétence.
 */
export class Skill {
    /** Un nom de compétence. */
    name: string;
    /** La description de la technologie. */
    description?: string;
    /** Une note de compétence sur 5. */
    rate?: number;

    /**
     * Constructeur d'une compétence.
     * @param name un nom
     * @param description une description
     * @param rate une note sur 5
     */
    constructor(name: string, description: string, rate: number) {
        this.name = name;
        this.description = description;
        this.rate = rate;
    }
}
