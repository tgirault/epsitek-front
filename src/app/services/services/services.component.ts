import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  panelOpenState = false;

  constructor(private library: FaIconLibrary) {
    library.addIcons(faArrowRight);
  }

  ngOnInit(): void {
  }

}
