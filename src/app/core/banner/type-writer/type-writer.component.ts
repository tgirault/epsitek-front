import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-writer',
  templateUrl: './type-writer.component.html',
  styleUrls: ['./type-writer.component.scss']
})
export class TypeWriterComponent implements OnInit {

  /** Mots à écrire. */
  @Input() words: Array<string>;
  /** Texte affiché. */
  displayedText: string;

  /**
   * Constructeur du composant.
   */
  constructor() { }

  /**
   * Action à l'initialisation du composant.
   */
  ngOnInit(): void {
    this.write(this.words);
  }

  /**
   * Ecrire du texte avec un effet d'écriture.
   * @param words une liste de mots.
   */
  write(words: Array<string>): void {
    let wordsIndex = 0;
    let n = 0;
    let up = true;

    setInterval(() => {
      const word = words[wordsIndex];
      const wordLength = word.length;

      if (up) {
        this.displayedText = word.slice(0, n) + '_';
        n++;
      }

      if (n === wordLength + 1) {
        up = false;
      }

      if (!up) {
        this.displayedText = word.slice(0, n) + '_';
        n--;
      }

      if (n === 0) {
        up = true;
        wordsIndex++;
      }
      if (wordsIndex === words.length) {
        wordsIndex = 0;
      }

    }, 150);
  }

}
