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
        return [
            { icon: 'business_center', title: 'Années d\'expérience', value: '10' },
            { icon: 'add_task', title: 'Projets réalisés', value: '+8' },
            { icon: 'place', title: 'Disponible sur', value: 'Nantes' },
            { icon: 'thumb_up', title: 'A partir de', value: 'Avril 2021' }
        ];
    }
}
