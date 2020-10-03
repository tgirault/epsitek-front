import { Injectable } from '@angular/core';
import { Company } from '../model/company.data';

/**
 * Service métier de gestion des clients.
 */
@Injectable({
    providedIn: 'root',
})
export class CustomersService {

    /**
     * Rechercher tous les clients.
     */
    findAll(): Array<Company> {
        return Array.from([
            new Company('Sopra Steria', 'logo-soprasteria', 'https://www.soprasteria.com/fr'),
            new Company('DSIA', 'logo-dsia', 'https://logistar-dsia.com/fr/'),
            new Company('Douanes & Droits Indirects', 'logo-ddi', 'https://www.douane.gouv.fr/'),
            new Company('Préfecture de Police', 'logo-prefecture-police', 'https://www.prefecturedepolice.interieur.gouv.fr/'),
            new Company('Casier Judiciaire National', 'logo-cjn', 'https://casier-judiciaire.justice.gouv.fr/pages/accueil.xhtml'),
            new Company('ENEDIS', 'logo-enedis', 'https://www.enedis.fr/')
        ]);
    }
}
