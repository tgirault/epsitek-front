/**
 * Classe de description d'une technologie.
 */
export class Technology {
    /** Le nom de la technologie. */
    name: string;
    /** La description de la technologie. */
    description: string;

    /**
     * Constructeur d'une technologie.
     * @param name le nom de la technologie
     * @param description la description de la technologie
     */
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
