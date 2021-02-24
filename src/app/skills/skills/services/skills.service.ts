import { Injectable } from '@angular/core';
import { Category } from '../model/category.data';
import { Skill } from '../model/skill.data';

/**
 * Service métier de gestion des compétences.
 */
@Injectable({
    providedIn: 'root',
})
export class SkillsService {

    /**
     * Rechercher toutes les catégories avec une description des compétences.
     */
    findAllCategoriesWithDescribedSkills(): Array<Category> {
        return [
            { name: 'Technologies', skills: this.initTechnologySkills() },
            { name: 'Méthodologies', skills: this.initMethodologySkills() }
        ];
    }

    private initTechnologySkills(): Array<Skill> {
        return [
            { name: 'Orchestrateur de conteneurs', description: 'Kubernetes' },
            { name: 'Provider Cloud', description: 'Google Cloud Plateform' },
            { name: 'Moteurs d\'indexation', description: 'Elasticsearch, Apache Solr' },
            { name: 'Moteurs de workflow', description: 'Activiti' },
            { name: 'Bus d\'entreprise', description: 'Oracle Service Bus' },
            { name: 'Systèmes de Gestion de Base de Données', description: 'Oracle 12c, PostgreSQL, MySQL, MariaDB' },
            { name: 'Brokers JMS', description: 'ActiveMQ, MQSeries' },
            { name: 'Serveurs d\'application', description: 'Tomcat, JBoss' },
            { name: 'Gestion de configuration logicielle', description: 'Git (GitLab, Bitbucket), SVN' },
            { name: 'DevOps', description: 'Docker, Ansible, Jenkins' }
        ];
    }

    /**
     * Initialisation des compétences dans la catégorie des méthodologies.
     */
    private initMethodologySkills(): Array<Skill> {
        return [
            { name: 'Agile', description: 'Agile et agile à l\'échelle (SAFe)' },
            { name: 'Srum', description: 'SCRUM' },
            { name: 'Outils', description: 'JIRA, XRay TM for JIRA' }
        ];
    }

    /**
     * Rechercher toutes les catégories avec des compétences évaluées.
     */
    findAllCategoriesWithRatedSkills(): Array<Category> {
        return [
            { name: 'Langages', skills: this.initLanguagesSkills() },
            { name: 'Frameworks JEE', skills: this.initFrameworksJeeSkills() },
            { name: 'Frameworks Javascript', skills: this.initFrameworksJavascriptSkills() },
            { name: 'Gestion Electronique de Documents', skills: this.initGedSkills() }
        ];
    }

    /**
     * Initialisation des compétences dans la catégorie des langages.
     */
    private initLanguagesSkills(): Array<Skill> {
        return [
            { name: 'Java', rate: 5 },
            { name: 'SQL', rate: 5 },
            { name: 'Javascript', rate: 3.5 },
            { name: 'HTML', rate: 5 },
            { name: 'CSS', rate: 4.5 }
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
            { name: 'Spring Batch', rate: 5 },
            { name: 'Spring Security OAuth', rate: 4.5 },
            { name: 'EJB3, CDI, JPA, JSF2', rate: 4 },
            { name: 'Java Batch Processing', rate: 4 },
            { name: 'Activiti', rate: 5 },
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
            { name: 'Angular 2+', rate: 4 },
            { name: 'React.js', rate: 2.5 }
        ];
    }
}
