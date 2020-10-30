import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../model/category.data';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  /**
   * Une catégorie.
   */
  @Input()
  category: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
