import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  /** Une icône. */
  @Input() icon: string;
  /** Un titre. */
  @Input() title: string;
  /** Une valeur. */
  @Input() value: string;

  /**
   * Constructeur d'une carte du dashboard.
   */
  constructor() { }

  ngOnInit(): void {
  }

}
