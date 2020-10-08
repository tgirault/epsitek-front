import { Component, OnInit } from '@angular/core';
import { Indicator } from './model/indicator.data';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /** Liste des indicateurs du dashboard. */
  indicators: Array<Indicator>;

  /**
   * Constructeur du composant.
   * @param dashboardService le service de gestion du dashboard
   */
  constructor(private dashboardService: DashboardService) { }

  /** Action à l'initialisation du composant. */
  ngOnInit(): void {
    this.indicators = this.dashboardService.findAll();
  }

}
