import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Epsitek';

  scroll(el: HTMLElement): void {
    el.scrollIntoView();
  }
}
