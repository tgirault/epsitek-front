import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

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
   * @param library la librairie fontawesome
   */
  constructor(private library: FaIconLibrary) {
    library.addIcons(faQuoteLeft, faQuoteRight);
  }

  ngOnInit(): void {
  }

}
