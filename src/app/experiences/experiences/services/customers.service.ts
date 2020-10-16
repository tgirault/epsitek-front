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
            new Company('DSIA', 'logo-dsia.jpg', 'https://logistar-dsia.com/fr/'),
            new Company('Vous ?', 'logo-company.jpg', '')
        ]);
    }
}
