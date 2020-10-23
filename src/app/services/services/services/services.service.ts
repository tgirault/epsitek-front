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
                description: '',
                items: [
                    'Etudes des besoins et des contraintes',
                    'Rédaction de documentation technique (spécifications techniques détaillées, dossier d\'architecture logicielle, dossier d\'architecture technique)',
                    'Mise en place d\'un socle technique',
                    'Mise en place d\'une architecture adaptée à vos besoins et vos contraintes (sécurité, dimensionnement, disponibilité, scalabilité horizontale, répartition de charge)',
                    'Veille technologique et intérêt pour les architectures micro-services (IaaS, PaaS, Saas, Docker)'
                ]
            },
            {
                icon: 'create',
                title: 'Conception fonctionnelle et technique',
                description: '',
                items: [
                    'Rédaction de documentation technique (spécifications techniques détaillées)',
                    'Modélisation UML (diagramme de cas d\'utilisation, diagrammes de séquence, diagramme de classes)',
                    'Modélisation de workflow BPMN',
                    'Modélisation de bases de données relationnelles (BCNF)',
                ]
            },
            {
                icon: 'supervised_user_circle',
                title: 'Lead d\'équipe',
                description: 'Leader technique dans des équipes de développement :',
                items: [
                    'Suivi des développements',
                    'Revues de code',
                    'Suivi des indicateurs',
                    'Support technique',
                    'Montée en compétence des développeurs juniors',
                    'Animation de Webinar',
                    'Chiffrages techniques',
                    'Répartition des tâches et suivi opérationnel (plannification, suivi des charges).'
                ]
            },
            {
                icon: 'code',
                title: 'Développement',
                description: 'Développement dans les règles de l\'art :',
                items: [
                    'Choix des technologies/frameworks adaptés au besoin',
                    'Mise en place de socles techniques sécurisés et performants',
                    'Développement de fonctionnalités full-stack Java / Angular',
                    'Développement de traitements batch robustes et performants',
                    'Développement d\'interfaces utilisateur ergonomiques avec des contraintes de responsive design et d\'accessibilité (RGAA)'
                ]
            },
            {
                icon: 'verified',
                title: 'Qualité logicielle',
                description: 'Mise en application des bonnes pratiques et des principes de qualité logicielle :',
                items: [
                    'Tests unitaires',
                    'Tests d\'intégration automatisés',
                    'Revue de code',
                    'Suivi des indicateurs de qualimétrie',
                    'Rédaction de cas de tests'
                ]
            },
            {
                icon: 'addchart',
                title: 'Performances',
                description: 'Mesure et optimisation des performances :',
                items: [
                    'Rédaction du cahier des charges (Test de dégradation des transactions, tests de montée en charge, tests de performances)',
                    'Préparation et exécution des campagnes de tests (JMeter)',
                    'Relevé des métriques et analyse des résultats (ElasticSearch, Logstash, Kibana)',
                    'Optimisation des performances (JProfiler)'
                ]
            },
            {
                icon: 'verified_user',
                title: 'Sécurité',
                description: 'Sensibilisé et formé à la sécurité.',
                items: []
            },
            {
                icon: 'settings',
                title: 'Méthodologie',
                description: 'Familiarisé avec les méthodologies SCRUM et Agile à l\'échelle (Safe).',
                items: [
                    'Participation aux cérémonies agiles: Planning Increment, Daily Meeting, Backlog Refinement, Sprint Planning, Poker Planning, Démonstration, Rétrospective.',
                    'Mise en place et animation des cérémonies agiles',
                    'Mise en place du board Jira',
                    'Alimentation des sprints pour l\'équipe, calcul de la capacité, etc.'
                ]
            },
            {
                icon: 'published_with_changes',
                title: 'DevOps',
                description: 'Mise en place d\'un outillage industrialisé :',
                items: [
                    'Mise en place de la fabrique logicielle, du pipeline de déploiement continue avec Jenkins.',
                    'Conteneurisation des briques logicielles avec Docker',
                    'Installation automatisée des briques logicielles avec Ansible.'
                ]
            },
            {
                icon: 'storage',
                title: 'Administration système',
                description: '',
                items: [
                    'Administration système et réseau des VMs.',
                    'Développement de scripts Shell.'
                ]
            }
        ];
    }
}
