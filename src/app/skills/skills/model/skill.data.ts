/**
 * Classe de description d'une compétence.
 */
export class Skill {
    /** Un nom de compétence. */
    name: string;
    /** Une note de compétence sur 5. */
    rate: number;

    /**
     * Constructeur d'une compétence.
     * @param name un nom
     * @param rate une note sur 5
     */
    constructor(name: string, rate: number) {
        this.name = name;
        this.rate = rate;
    }
}
