import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss']
})
export class CitationComponent implements OnInit {

  /** Une phrase de citation. */
  @Input() phrase: string;

  /**
   * Constructeur du composant.
   */
  constructor() {
  }

  ngOnInit(): void {
  }

}
