import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {

  /** Paramètre de chargement. */
  @Input() loading = false;

  /** Paramètre de chargement HTTP. */
  @Input() httploading = false;

  /**
   * Constructeur par défaut du composant.
   */
  constructor() { }

  /**
   * Action à l'initialisation du composant.
   */
  ngOnInit(): void { }

  /**
   * Action au chargement.
   * @param changes un changement
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
