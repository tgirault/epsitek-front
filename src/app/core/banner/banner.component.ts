import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  /**
   * Constructeur du composant.
   * @param translate service de gestion des traductions
   */
  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

}
