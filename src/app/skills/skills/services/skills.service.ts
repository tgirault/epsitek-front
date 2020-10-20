import { Injectable } from '@angular/core';
import { Category } from '../model/category.data';
import { Skill } from '../model/skill.data';
import { Technology } from '../model/technology.data';

/**
 * Service métier de gestion des compétences.
 */
@Injectable({
    providedIn: 'root',
})
export class SkillsService {

    /**
     * Rechercher toutes les technologies.
     */
    findAllTechnologies(): Array<Technology> {
        return [
            { name: 'Moteurs d\'indexation', description: 'Elasticsearch, Apache Solr' },
            { name: 'Moteurs de workflow', description: 'Activiti' },
            { name: 'Bus d\'entreprise', description: 'Oracle Service Bus' },
            { name: 'Systèmes de Gestion de Base de Données', description: 'Oracle 12c, PostgreSQL, MySQL, MariaDB' },
            { name: 'Brokers JMS', description: 'ActiveMQ, MQSeries' },
            { name: 'Serveurs d\'application', description: 'Tomcat, JBoss' },
            { name: 'Gestion de configuration logicielle', description: 'Git (GitLab, Bitbucket}, SVN' },
            { name: 'DevOps', description: 'Docker, Ansible, Jenkins' }
        ];
    }

    /**
     * Rechercher toutes les méthodologies.
     */
    findAllMethodologies(): Array<Technology> {
        return [
            { name: 'Agile', description: 'Agile et agile à l\'échelle (SAFe)' },
            { name: 'Srum', description: 'SCRUM' },
            { name: 'Outils', description: 'JIRA, XRay TM for JIRA' }
        ];
    }

    /**
     * Rechercher toutes les catégories de compétences et les compétences associées.
     */
    findAllCategoriesWithSkills(): Array<Category> {
        return [
            { name: 'Langages', skills: this.initLanguagesSkills() },
            { name: 'Frameworks JEE', skills: this.initFrameworksJeeSkills() },
            { name: 'Gestion Electronique de Documents', skills: this.initGedSkills() },
            { name: 'Frameworks Javascript', skills: this.initFrameworksJavascriptSkills() }
        ];
    }

    /**
     * Initialisation des compétences dans la catégorie des langages.
     */
    private initLanguagesSkills(): Array<Skill> {
        return [
            { name: 'Java 8+', rate: 5 },
            { name: 'SQL', rate: 5 },
            { name: 'Typescript', rate: 4 },
            { name: 'HTML, CSS, JavaScript', rate: 4 }
        ];
    }

    /**
     * Initialisation des compétences dans la catégorie des frameworks JEE.
     */
    private initFrameworksJeeSkills(): Array<Skill> {
        return [
            { name: 'JUnit / Mockito', rate: 5 },
            { name: 'Spring / Spring Boot', rate: 5 },
            { name: 'Spring Data / Hibernate', rate: 5 },
            { name: 'Spring Security OAuth', rate: 4 },
            { name: 'Spring Batch', rate: 4.5 },
            { name: 'JSF2, CDI, EJB3, JPA, JTA', rate: 4 },
            { name: 'Activiti', rate: 4.5 },
        ];
    }

    /**
     * Initialisation des compétences dans la catégorie des outils de Gestion Electronique de Documents.
     */
    private initGedSkills(): Array<Skill> {
        return [
            { name: 'Alfresco ECM', rate: 4.5 }
        ];
    }

    /**
     * Initialisation des compétences dans la catégorie des frameworks Javascript.
     */
    private initFrameworksJavascriptSkills(): Array<Skill> {
        return [
            { name: 'Angular 2+', rate: 4 }
        ];
    }
}
