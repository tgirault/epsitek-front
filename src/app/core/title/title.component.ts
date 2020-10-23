import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  /** Le titre. */
  @Input()
  title: string;

  /** L'image de fond. */
  @Input()
  image: string;

  constructor() { }

  ngOnInit(): void {
    this.title = this.title.toUpperCase();
  }

}
