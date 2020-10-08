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
        return Array.from([
            new Technology('Moteurs d\'indexation', 'Elasticsearch, Apache Solr'),
            new Technology('Moteurs de workflow', 'Activiti'),
            new Technology('Bus d\'entreprise', 'Oracle Service Bus'),
            new Technology('Systèmes de Gestion de Base de Données', 'Oracle 12c, PostgreSQL, MySQL, MariaDB'),
            new Technology('Brokers JMS', 'ActiveMQ, MQSeries'),
            new Technology('Serveurs d\'application', 'Tomcat, JBoss'),
            new Technology('Gestion de configuration logicielle', 'Git (GitLab, Bitbucket), SVN'),
            new Technology('DevOps', 'Docker, Ansible, Jenkins'),
        ]);
    }

    /**
     * Rechercher toutes les méthodologies.
     */
    findAllMethodologies(): Array<Technology> {
        return Array.from([
            new Technology('Agile', 'Agile et agile à l\'échelle (SAFe)'),
            new Technology('Srum', 'SCRUM'),
            new Technology('Outils', 'JIRA, XRay TM for JIRA')
        ]);
    }

    /**
     * Rechercher toutes les catégories de compétences et les compétences associées.
     */
    findAllCategoriesWithSkills(): Array<Category> {
        return Array.from([
            new Category('Langages', this.initLanguagesSkills()),
            new Category('Frameworks JEE', this.initFrameworksJeeSkills()),
            new Category('Gestion Electronique de Documents', this.initGedSkills()),
            new Category('Frameworks Javascript', this.initFrameworksJavascriptSkills())
        ]);
    }

    /**
     * Initialisation des compétences dans la catégorie des langages.
     */
    private initLanguagesSkills(): Array<Skill> {
        return Array.from([
            new Skill('Java', 5),
            new Skill('SQL', 5),
            new Skill('Typescript', 4),
            new Skill('HTML, CSS, Javascript', 4)
        ]);
    }

    /**
     * Initialisation des compétences dans la catégorie des frameworks JEE.
     */
    private initFrameworksJeeSkills(): Array<Skill> {
        return Array.from([
            new Skill('JUnit / Mockito', 5),
            new Skill('Spring / Spring Boot', 5),
            new Skill('Spring Data / Hibernate', 5),
            new Skill('Spring Security OAuth', 4),
            new Skill('Spring Batch', 4.5),
            new Skill('Activiti', 4.5),
        ]);
    }

    /**
     * Initialisation des compétences dans la catégorie des outils de Gestion Electronique de Documents.
     */
    private initGedSkills(): Array<Skill> {
        return Array.from([
            new Skill('Alfresco ECM', 4.5)
        ]);
    }

    /**
     * Initialisation des compétences dans la catégorie des frameworks Javascript.
     */
    private initFrameworksJavascriptSkills(): Array<Skill> {
        return Array.from([
            new Skill('Angular', 4)
        ]);
    }
}