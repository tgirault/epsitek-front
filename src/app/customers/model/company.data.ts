
/**
 * Classe de description d'une entreprise.
 */
export class Company {
    /** Le nom de l'entreprise. */
    name: string;
    /** La logo de l'entreprise. */
    logo: string;
    /** Le site web de l'entreprise. */
    website: string;

    /**
     * Constructeur d'une entreprise.
     * @param name le nom de l'entreprise
     * @param logo le logo de l'entreprise
     * @param website le site web de l'entreprise
     */
    constructor(name: string, logo: string, website: string) {
        this.name = name;
        this.logo = logo;
        this.website = website;
    }
}
