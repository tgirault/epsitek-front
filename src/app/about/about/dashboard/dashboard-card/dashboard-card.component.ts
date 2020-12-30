import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent implements OnInit {

  /** Une icône. */
  @Input() icon: string;
  /** Une couleur. */
  @Input() color: string;
  /** Un titre. */
  @Input() title: string;
  /** Une valeur. */
  @Input() value: string;
  /** Un suffixe. */
  @Input() suffix: string;

  /**
   * Constructeur d'une carte du dashboard.
   */
  constructor() { }

  ngOnInit(): void {
    const maxNumber = Number(this.value);
    if (!isNaN(maxNumber)) {
      let counter = 0;
      setInterval(() => {
        counter = counter < maxNumber ? counter + 1 : maxNumber;
        this.value = counter + '';
    }, 100);
    }
  }

}
