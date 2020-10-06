
/**
 * Classe de description d'un message de contact.
 */
export class Message {
    /** Le prénom de la personne. */
    firstName: string;
    /** Le nom de la personne. */
    lastName: string;
    /** Le nom de la société de la personne. */
    company: string;
    /** L'email de la personne. */
    email: string;
    /** Le numéro de téléphone de la personne. */
    phone: string;
    /** Le message de la personne. */
    message: string;

    /**
     * Constructeur d'un message.
     * @param firstName le prénom de la personne
     * @param lastName le nom de la personne
     * @param company la société de la personne
     * @param email l'adresse email de la personne
     * @param phone le numéro de téléphone de la personne
     * @param message le message de la personne
     */
    constructor(firstName: string, lastName: string, company: string, email: string, phone: string, message: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.message = message;
    }
}
