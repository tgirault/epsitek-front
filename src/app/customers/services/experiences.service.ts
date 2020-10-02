import { Injectable } from '@angular/core';
import { Company } from '../model/company.data';
import { Experience } from '../model/experience.data';

/**
 * Service métier de gestion des expériences.
 */
@Injectable({
    providedIn: 'root',
})
export class ExperiencesService {

    /**
     * Rechercher toutes les technologies.
     */
    findAll(): Array<Experience> {
        const soprasteria = new Company('Sopra Steria', 'logo-soprasteria', 'https://www.soprasteria.com/fr');
        return Array.from([
            new Experience(
                'Juin 2019',
                'Sept. 2020',
                'Lead developer Java/Angular - Scrum master',
                'Nantes',
                new Company('DSIA', 'logo-dsia', 'https://logistar-dsia.com/fr/'),
                'Lead developer / Scrum master d\'une équipe de 5 à 8 développeurs au sein d\'un éditeur de solutions en Supply Chain Management. Développement d\'une solution logistique de gestion des entrepôts (WMS) et optimisation des processus métier de préparation des commandes Drive pour le compte de Carrefour.',
                Array.from([
                    'Développement full stack de nouvelles fonctionnalités (Java/Spring, Angular)',
                    'Migration technique d\'une solution existante sur le socle technique de l\'entreprise',
                    'Migration vers une architecture scalable : Front Angular 8, API Gateway (Zuul), Services back Java/Spring',
                    'Contributeur de la mise en place des principes SCRUM et du board agile sur JIRA (Daily meeting, Sprint planning, Poker planning, Démonstration)',
                    'Contributeur de la mise en place des bonnes pratiques de tests (XRay TM for JIRA)',
                    'Travail en collaboration avec les différents services de l\'entreprise (Développement, Industrialisation, Qualité, Production)',
                ]),
                Array.from([
                    'Angular 8',
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
                    'Maven'
                ]),
                Array.from([
                    'Git',
                    'Bitbucket',
                    'PostgreSQL 9/11',
                    'MQSeries',
                    'JIRA',
                    'Confluence',
                    'XRay',
                    'XWiki'
                ]),
                Array.from([])),
            new Experience(
                'Avril 2018',
                'Juin 2019',
                'Leader technique Java',
                'Nantes, Paris',
                soprasteria,
                'Leader technique d\'une équipe agile de 8 personnes sur un projet en agile distribué (SAFe), de gestion des échanges pour le compte d\'ENEDIS (environ 35 personnes).',
                Array.from([
                    'Conception, développement et tests unitaires',
                    'Tests d\'acceptation automatisés Fitnesse',
                    'Support aux développeurs juniors et contribution à leur montée en compétence',
                    'Référent technique transverse du projet. Animation d\'un backlog refinement hebdomadaire avec les lead developpers de chaque équipe afin d\'identifier les sujets techniques à instruire.',
                    'Création, priorisation des US techniques en lien avec le chef de projet client et l\'architecte',
                    'Animation transverse de tech\'lunch (Docker, Activiti)',
                    'Participation aux cérémonies agiles (PI Planning, Daily stand up, Backlog refinement, Sprint planning, Planning poker, Démonstrations, Rétrospectives)',
                    'Expérience DevOps avec Jenkins, Docker et Ansible : dockerisation d\'une brique logicielle'
                ]),
                Array.from([
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
                ]),
                Array.from([
                    'Git',
                    'GitLab',
                    'Tomcat',
                    'Zuul',
                    'Eureka',
                    'ActiveMQ',
                    'Oracle 12c',
                    'Oracle Service Bus'
                ]),
                Array.from([
                    'Docker',
                    'Ansible',
                    'Jenkins'
                ])),
            new Experience(
                'Juin 2016 ',
                'Avril 2018',
                'Leader technique Java',
                'Nantes',
                soprasteria,
                'Responsable technique d\'une équipe de 10 développeurs sur un projet de build de 6000 jours/homme pour le compte du Ministère de la Justice. Refonte du système d\'information du Casier Judiciaire National et dématérialisation des demandes de bulletin n°3 néant.',
                Array.from([
                    'Mise en place du socle technique en respectant les contraintes d\'accessibilité(RGAA), de responsive design(application consultable sur mobile et tablette), de performance et de sécurité',
                    'Industrialisation du projet (pipeline d\'intégration continue Jenkins, automatisation de l\'installation, suivi des indicateurs de qualité Sonar)',
                    'Animation d\'ateliers techniques avec la cellule technique du client',
                    'Encadrement de l\'équipe de développement (mise en place de processus de développement, répartition des tâches, revues de code, suivi de la qualité, diffusion des bonnes pratiques, support)',
                    'Rédaction de documentation technique (dossier d\'installation, dossier d\'exploitation, spécifications techniques détaillées)',
                    'Chantier performance (rédaction du cahier des charges, préparation et exécution des scénarios JMeter, analyse des résultats avec la Suite Elastic/Kibana et optimisation de code)',
                    'Audit de sécurité avec OWASP ZAP',
                ]),
                Array.from([
                    'JEE 7',
                    'JSF 2',
                    'Primefaces',
                    'HTML5',
                    'CSS3',
                    'Javascript',
                    'EJB 3',
                    'CDI',
                    'Hibernate',
                    'JPA',
                    'JTA',
                    'JMS',
                    'Java Batch Processing',
                    'Infinispan',
                    'JUnit'
                ]),
                Array.from([
                    'JBoss EAP 7',
                    'Oracle 12c',
                    'SoapUI',
                    'Elastic Search',
                    'Logstash',
                    'Metric Beat',
                    'Kibana',
                    'JMeter'
                ]),
                Array.from([
                    'Jenkins'
                ])),
            new Experience(
                'Novembre 2013',
                'Juin 2016',
                'Leader technique Java / Alfresco',
                'Nantes, Paris',
                soprasteria,
                'Leader technique d\'un projet de dématérialisation et de Gestion Électronique de Documents pour le compte de la Préfecture de police de Paris.',
                Array.from([
                    'Développement front office (JEE) et back office (Alfresco)',
                    'Expertise Alfresco',
                    'Études techniques, chiffrages',
                    'Architecture technique : scalabilité horizontale, clustering, répartition de charges',
                    'Encadrement et support d\'une équipe de 4-5 développeurs',
                    'Mise en place de la fabrique logicielle avec Jenkins'
                ]),
                Array.from([
                    'Alfresco (Web scripts)',
                    'Moteur d\'indexation Solr',
                    'Moteur de workflow Activiti',
                    'Java/J2EE',
                    'Spring',
                    'Spring MVC',
                    'HTML/CSS',
                    'JQuery'
                ]),
                Array.from([
                    'Apache',
                    'Tomcat',
                    'PostgreSQL',
                    'MariaDB'
                ]),
                Array.from([
                    'Jenkins'
                ])),
            new Experience(
                'Octobre',
                'Novembre 2013',
                'Référent technique',
                'Nantes, Paris',
                soprasteria,
                'Dans le cadre d\'une avant-vente, réalisation d\'une étude technique et d\'un POC sur la mise en place d\'une messagerie instantanée permettant la communication entre des unités maritimes, aériennes et terrestres des Douanes.',
                Array.from([
                    'Étude comparative des protocoles d\'échanges',
                    'Rédaction d\'un dossier d\'architecture technique',
                    'Prototypage d\'une architecture de messagerie instantanée',
                    'Présentation de l\'étude'
                ]),
                Array.from([]),
                Array.from([
                    'XMPP',
                    'eJabberd',
                    'CentOS 5',
                    'OpenLDAP'
                ]),
                Array.from([])),
            new Experience(
                'Sept. 2011',
                'Sept. 2013',
                'Développeur Java/JEE',
                'Nantes, Paris',
                soprasteria,
                'Développement d\'une application pour la gestion des mutations des agents douaniers au sein d\'une équipe de 5 personnes.',
                Array.from([
                    'Conception, développement, tests unitaires',
                    'Rédaction de spécifications fonctionnelles détaillées'
                ]),
                Array.from([
                    'Java/JEE',
                    'Spring',
                    'Struts 2',
                    'HTML/CSS',
                    'JQuery',
                    'Hibernate',
                    'JPA',
                    'JUnit'
                ]),
                Array.from([
                    'SVN',
                    'Tomcat',
                    'Sonar',
                    'JIRA'
                ]),
                Array.from([
                    'Jenkins'
                ])),
            new Experience(
                'Mai',
                'Septembre 2011',
                'Développeur Java/JEE',
                'Nantes, Paris',
                soprasteria,
                'Stage de fin d\'études. Développement d\'une application de gestion des primes pour les agents de la Mairie de Paris au sein d\'une équipe de 6 personnes. (Paris / Nantes)',
                Array.from([
                    'Développement et tests unitaires',
                ]),
                Array.from([
                    'Java/JEE',
                    'frawemork Lutèce',
                    'Spring/Hibernate/JPA',
                    'JUnit',
                    'HTML/CSS',
                    'JQuery'
                ]),
                Array.from([
                    'JIRA',
                    'SVN',
                    'Tomcat'
                ]),
                Array.from([
                    'Jenkins'
                ]))
        ]);
    }
}
