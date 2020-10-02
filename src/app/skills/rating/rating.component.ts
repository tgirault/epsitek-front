import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  /** Note maximale. */
  private readonly MAX_RATE = 5;

  /** Note en paramètre du composant. */
  @Input() rate = 0;

  /**
   * Nombre d'étoile pleines.
   */
  private get numberOfFullStars(): number {
    return Math.floor(this.rate);
  }

  /**
   * Nombre d'étoiles vides.
   */
  private get numberOfEmptyStars(): number {
    return this.MAX_RATE - Math.ceil(this.rate);
  }

  /**
   * Liste des étoiles pleines.
   */
  get fullStars(): any[] {
    return Array(this.numberOfFullStars);
  }

  /**
   * Liste des étoiles vides.
   */
  get emptyStars(): any[] {
    return Array(this.numberOfEmptyStars);
  }

  /**
   * Liste des étoiles incomplètes.
   */
  get hasAnHalfStar(): boolean {
    return this.rate % 1 !== 0;
  }
}
