import { Indicator } from '../model/indicator.data';

export class DashboardServiceMock {

    /**
     * Envoyer un message.
     * @param message un message
     */
    findAll(): Array<Indicator> {
        return [
            { icon: 'business_center', title: 'Années d\'expérience', value: '10' },
            { icon: 'add_task', title: 'Projets réalisés', value: '+8' },
            { icon: 'place', title: 'Disponible sur', value: 'Nantes' },
            { icon: 'thumb_up', title: 'A partir de', value: 'Jan. 2021' }
        ];
    }
}
