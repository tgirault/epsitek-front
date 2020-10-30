import { Injectable } from '@angular/core';
import { Service } from '../model/service.data';

/**
 * Service métier de gestion des services.
 */
@Injectable({
    providedIn: 'root',
})
export class ServicesService {

    /**
     * Rechercher tous les services.
     */
    findAll(): Array<Service> {
        return [
            {
                icon: 'device_hub',
                title: 'Architecture',
                description: 'Mise en place d\'une architecture adaptée à vos besoins et vos contraintes.',
                items: [
                    'Etude technique, prototypage',
                    'Rédaction de documentation technique (spécifications techniques détaillées, dossier d\'architecture logicielle, dossier d\'architecture technique)',
                    'Choix des technologies / frameworks adaptés au besoin et contraintes',
                    'Mise en place de socles techniques sécurisés et performants',
                ]
            },
            {
                icon: 'create',
                title: 'Conception',
                description: 'Concevoir des solutions maintenables et documentées.',
                items: [
                    'Rédaction de documentation technique',
                    'Modélisation UML',
                    'Modélisation de workflow BPMN',
                    'Modélisation de bases de données',
                ]
            },
            {
                icon: 'supervised_user_circle',
                title: 'Lead d\'équipe',
                description: 'Animer les équipes de développement.',
                items: [
                    'Animation de Webinar',
                    'Montée en compétence des développeurs juniors',
                    'Pilotage opérationnel (estimation, planification, suivi, reporting)'
                ]
            },
            {
                icon: 'code',
                title: 'Développement',
                description: 'Développer des solutions ergonomiques, robustes et performantes.',
                items: [
                    'Développement de fonctionnalités full-stack Java / Angular',
                    'Développement de traitements batch robustes et performants',
                    'Développement d\'interfaces utilisateur ergonomiques avec des contraintes de responsive design et d\'accessibilité (RGAA)'
                ]
            },
            {
                icon: 'verified',
                title: 'Qualité logicielle',
                description: 'Mise en application des bonnes pratiques et des principes de qualité logicielle.',
                items: [
                    'Revue de code',
                    'Tests unitaires',
                    'Tests d\'intégration automatisés',
                    'Suivi des indicateurs de qualimétrie',
                    'Rédaction/exécution de cas de tests'
                ]
            },
            {
                icon: 'addchart',
                title: 'Performances',
                description: 'Mesure et optimisation des performances.',
                items: [
                    'Rédaction du cahier des charges',
                    'Préparation et exécution des campagnes de tests',
                    'Relevé des métriques et analyse des résultats (ElasticSearch, Logstash, Kibana)',
                    'Optimisation des performances'
                ]
            },
            {
                icon: 'verified_user',
                title: 'Sécurité',
                description: 'Sensibilisé et formé à la sécurité logicielle.',
                items: []
            },
            {
                icon: 'settings',
                title: 'Méthodologie',
                description: 'Familiarisé avec les méthodologies SCRUM et Agile à l\'échelle (Safe).',
                items: [
                    'Participation aux cérémonies agiles: Planning Increment, Daily Meeting, Backlog Refinement, Sprint Planning, Poker Planning, Démonstration, Rétrospective.',
                    'Mise en place des principes agiles et animation des cérémonies'
                ]
            },
            {
                icon: 'published_with_changes',
                title: 'DevOps',
                description: 'Mise en place d\'un outillage industrialisé.',
                items: [
                    'Mise en place de la fabrique logicielle',
                    'Mise en place de l\'intégration/déploiement continue',
                    'Dockeriser des briques logicielles',
                    'Automatiser l\'installation de briques logicielles'
                ]
            }
        ];
    }
}
