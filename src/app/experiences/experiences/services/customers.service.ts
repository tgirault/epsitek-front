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
        return [
            {
                name: 'DSIA',
                logo: 'logo-dsia',
                website: 'https://logistar-dsia.com/fr/'
            },
            {
                name: 'Infotel',
                logo: 'logo-infotel',
                website: 'https://www.infotel.com/'
            },
            {
                name: 'Vous ?',
                logo: 'logo-company',
                website: ''
            }
        ];
    }
}
