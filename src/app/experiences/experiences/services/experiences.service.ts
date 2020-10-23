import { Injectable } from '@angular/core';
import { Experience } from '../model/experience.data';

/**
 * Service métier de gestion des expériences.
 */
@Injectable({
    providedIn: 'root',
})
export class ExperiencesService {

    /**
     * Rechercher toutes les expériences.
     */
    findAll(): Array<Experience> {
        return [
            {
                startDate: 'Juin 2019',
                endDate: 'Sept. 2020',
                duration: '1 an et 3 mois',
                title: 'Lead developer Java / Angular',
                place: 'Nantes',
                company: {
                    name: 'DSIA',
                    logo: 'logo-dsia',
                    website: 'https://logistar-dsia.com/fr/'
                },
                description: 'Lead developer / Scrum master d\'une équipe de 5 à 8 développeurs au sein d\'un éditeur de solutions en Supply Chain Management. Développement d\'une solution logistique de gestion des entrepôts (WMS) et optimisation des processus métier de préparation des commandes Drive pour le compte de Carrefour.',
                tasks: [
                    'Développement full stack de nouvelles fonctionnalités (Java / Spring, Angular)',
                    'Migration technique d\'une solution existante sur le socle technique de l\'entreprise',
                    'Migration vers une architecture scalable : Front Angular 8, API Gateway (Zuul), Services back Java / Spring',
                    'Contributeur de la mise en place des principes SCRUM et du board agile sur JIRA (Daily meeting, Sprint planning, Poker planning, Démonstration)',
                    'Contributeur de la mise en place des bonnes pratiques de tests (XRay TM for JIRA)',
                    'Travail en collaboration avec les différents services de l\'entreprise (Développement, Industrialisation, Qualité, Production)',
                ],
                technologies: [
                    'Angular 8',
                    'Typescript',
                    'Java 8',
                    'Spring Boot',
                    'Spring OAuth2',
                    'Spring Data',
                    'Spring Batch',
                    'API REST',
                    'Swagger',
                    'Junit',
                    'Flyway',
                    'Lombok',
                    'MapStruct',
                    'Maven',
                    'HTML',
                    'CSS',
                    'Javascript'
                ],
                tools: [
                    'Git',
                    'Bitbucket',
                    'PostgreSQL 9/11',
                    'MQSeries',
                    'JIRA',
                    'Confluence',
                    'XRay',
                    'XWiki'
                ],
                devOps: []
            },
            {
                startDate: 'Avril 2018',
                endDate: 'Juin 2019',
                duration: '1 an et 2 mois',
                title: 'Leader technique Java',
                place: 'Nantes, Paris',
                company: {
                    name: 'Sopra Steria',
                    logo: 'logo-soprasteria',
                    website: 'https://www.soprasteria.com/fr'
                },
                description: 'Leader technique d\'une équipe agile de 8 personnes sur un projet en agile distribué (SAFe), de gestion des échanges pour le compte d\'ENEDIS (environ 35 personnes).',
                tasks: [
                    'Conception, développement et tests unitaires',
                    'Tests d\'acceptation automatisés Fitnesse',
                    'Support aux développeurs juniors et contribution à leur montée en compétence',
                    'Référent technique transverse du projet. Animation d\'un backlog refinement hebdomadaire avec les lead developpers de chaque équipe afin d\'identifier les sujets techniques à instruire.',
                    'Création, priorisation des US techniques en lien avec le chef de projet client et l\'architecte',
                    'Animation transverse de tech\'lunch (Docker, Activiti)',
                    'Participation aux cérémonies agiles (Planning Increment, Daily meeting, Backlog Refinement, Sprint Planning, Poker Planning, Démonstrations, Rétrospectives)',
                    'Expérience DevOps avec Jenkins, Docker et Ansible : dockerisation d\'une brique logicielle'
                ],
                technologies: [
                    'Java 8',
                    'Spring Cloud',
                    'Spring Boot',
                    'Spring Data',
                    'Spring Batch',
                    'Hibernate',
                    'JUnit',
                    'Moteur de workflow Activiti',
                    'API Soap/REST',
                    'Swagger',
                    'MapStruct',
                    'Maven',
                    'Tests automatisés Fitnesse'
                ],
                tools: [
                    'Git',
                    'GitLab',
                    'Tomcat',
                    'Zuul',
                    'Eureka',
                    'ActiveMQ',
                    'Oracle 12c',
                    'Oracle Service Bus'
                ],
                devOps: [
                    'Docker',
                    'Ansible',
                    'Jenkins'
                ]
            },
            {
                startDate: 'Juin 2016 ',
                endDate: 'Avril 2018',
                duration: '1 an et 10 mois',
                title: 'Leader technique Java',
                place: 'Nantes',
                company: {
                    name: 'Sopra Steria',
                    logo: 'logo-soprasteria',
                    website: 'https://www.soprasteria.com/fr'
                },
                description: 'Responsable technique d\'une équipe de 10 développeurs sur un projet de build de 6000 jours/homme pour le compte du Ministère de la Justice. Refonte du système d\'information du Casier Judiciaire National et dématérialisation des demandes de bulletin n°3 néant.',
                tasks: [
                    'Mise en place du socle technique en respectant les contraintes d\'accessibilité (RGAA), de responsive design (application consultable sur mobile et tablette), de performance et de sécurité',
                    'Industrialisation du projet (pipeline d\'intégration continue Jenkins, automatisation de l\'installation, suivi des indicateurs de qualité Sonar)',
                    'Animation d\'ateliers techniques avec la cellule technique du client',
                    'Encadrement de l\'équipe de développement (mise en place de processus de développement, répartition des tâches, revues de code, suivi de la qualité, diffusion des bonnes pratiques, support)',
                    'Rédaction de documentation technique (dossier d\'installation, dossier d\'exploitation, spécifications techniques détaillées)',
                    'Chantier performance (rédaction du cahier des charges, préparation et exécution des scénarios JMeter, analyse des résultats avec la Suite Elastic/Kibana et optimisation de code)',
                    'Audit de sécurité avec OWASP ZAP',
                ],
                technologies: [
                    'JEE 7',
                    'EJB 3',
                    'CDI',
                    'Hibernate',
                    'JPA',
                    'JTA',
                    'JMS',
                    'Java Batch Processing',
                    'Infinispan',
                    'JUnit',
                    'JSF 2',
                    'Primefaces',
                    'HTML5',
                    'CSS3',
                    'Javascript',
                ],
                tools: [
                    'JBoss EAP 7',
                    'Oracle 12c',
                    'SoapUI',
                    'Elastic Search',
                    'Logstash',
                    'Metric Beat',
                    'Kibana',
                    'JMeter'
                ],
                devOps: [
                    'Jenkins'
                ]
            },
            {
                startDate: 'Novembre 2013',
                endDate: 'Juin 2016',
                duration: '2 an et 6 mois',
                title: 'Leader technique Java / Alfresco',
                place: 'Nantes, Paris',
                company: {
                    name: 'Sopra Steria',
                    logo: 'logo-soprasteria',
                    website: 'https://www.soprasteria.com/fr'
                },
                description: 'Leader technique d\'un projet de dématérialisation et de Gestion Électronique de Documents pour le compte de la Préfecture de police de Paris.',
                tasks: [
                    'Développement front office (JEE) et back office (Alfresco)',
                    'Expertise Alfresco',
                    'Études techniques, chiffrages',
                    'Architecture technique : scalabilité horizontale, clustering, répartition de charges',
                    'Encadrement et support d\'une équipe de 4-5 développeurs',
                    'Mise en place de la fabrique logicielle avec Jenkins'
                ],
                technologies: [
                    'Alfresco',
                    'Moteur d\'indexation Solr',
                    'Moteur de workflow Activiti',
                    'Java',
                    'JEE',
                    'Spring',
                    'Spring MVC',
                    'HTML',
                    'CSS',
                    'JQuery'
                ],
                tools: [
                    'Apache',
                    'Tomcat',
                    'LDAP',
                    'PostgreSQL',
                    'MariaDB'
                ],
                devOps: [
                    'Jenkins'
                ]
            },
            {
                startDate: 'Octobre',
                endDate: 'Novembre 2013',
                duration: '2 mois',
                title: 'Référent technique',
                place: 'Nantes, Paris',
                company: {
                    name: 'Sopra Steria',
                    logo: 'logo-soprasteria',
                    website: 'https://www.soprasteria.com/fr'
                },
                description: 'Dans le cadre d\'une avant-vente, réalisation d\'une étude technique et d\'un POC sur la mise en place d\'une messagerie instantanée permettant la communication entre des unités maritimes, aériennes et terrestres des Douanes.',
                tasks: [
                    'Étude comparative des protocoles d\'échanges',
                    'Rédaction d\'un dossier d\'architecture technique',
                    'Prototypage d\'une architecture de messagerie instantanée',
                    'Présentation de l\'étude'
                ],
                technologies: [],
                tools: [
                    'XMPP',
                    'eJabberd',
                    'CentOS 5',
                    'OpenLDAP'
                ],
                devOps: []
            },
            {
                startDate: 'Sept. 2011',
                endDate: 'Sept. 2013',
                duration: '2 ans',
                title: 'Développeur Java / JEE',
                place: 'Nantes, Paris',
                company: {
                    name: 'Sopra Steria',
                    logo: 'logo-soprasteria',
                    website: 'https://www.soprasteria.com/fr'
                },
                description: 'Développement d\'une application pour la gestion des mutations des agents douaniers au sein d\'une équipe de 5 personnes.',
                tasks: [
                    'Conception, développement, tests unitaires',
                    'Rédaction de spécifications fonctionnelles détaillées'
                ],
                technologies: [
                    'Java',
                    'JEE',
                    'Spring',
                    'Hibernate',
                    'JPA',
                    'JUnit',
                    'Struts 2',
                    'HTML',
                    'CSS',
                    'JQuery'
                ],
                tools: [
                    'SVN',
                    'Tomcat',
                    'Sonar',
                    'JIRA'
                ],
                devOps: [
                    'Jenkins'
                ]
            },
            {
                startDate: 'Mai',
                endDate: 'Septembre 2011',
                duration: '5 mois',
                title: 'Développeur Java / JEE',
                place: 'Nantes, Paris',
                company: {
                    name: 'Sopra Steria',
                    logo: 'logo-soprasteria',
                    website: 'https://www.soprasteria.com/fr'
                },
                description: 'Stage de fin d\'études. Développement d\'une application de gestion des primes pour les agents de la Mairie de Paris au sein d\'une équipe de 6 personnes. (Paris / Nantes)',
                tasks: [
                    'Développement et tests unitaires',
                ],
                technologies: [
                    'Java',
                    'JEE',
                    'Frawemork Lutèce',
                    'Spring',
                    'Hibernate',
                    'JPA',
                    'JUnit',
                    'HTML',
                    'CSS',
                    'JQuery'
                ],
                tools: [
                    'JIRA',
                    'SVN',
                    'Tomcat'
                ],
                devOps: [
                    'Jenkins'
                ]
            }
        ];
    }
}
