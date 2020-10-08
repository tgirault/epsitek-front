import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Indicator } from '../model/indicator.data';

/**
 * Service métier de gestion du dashboard.
 */
@Injectable({
    providedIn: 'root',
})
export class DashboardService {

    /**
     * Constructeur du service de gestion du dashboard.
     * @param apiService le service de gestion des appels REST
     */
    constructor(private apiService: ApiService) { }

    /**
     * Envoyer un message.
     * @param message un message
     */
    findAll(): Array<Indicator> {
        return Array.from([
            new Indicator('business_center', 'Années d\'expérience', '10'),
            new Indicator('add_task', 'Projets réalisés', '+8'),
            new Indicator('place', 'Disponible sur', 'Nantes'),
            new Indicator('thumb_up', 'A partir de', 'Jan. 2021')
        ]);
    }
}
