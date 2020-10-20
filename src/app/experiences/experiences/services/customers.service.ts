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
                logo: 'logo-dsia.jpg',
                website: 'https://logistar-dsia.com/fr/'
            },
            {
                name: 'Vous ?',
                logo: 'logo-company.jpg',
                website: ''
            }
        ];
    }
}
