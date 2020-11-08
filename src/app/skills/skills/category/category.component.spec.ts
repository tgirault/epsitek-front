import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category } from '../model/category.data';
import { Skill } from '../model/skill.data';
import { CategoryComponent } from './category.component';


describe('CategoryComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryComponent, TestHostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show category name Technologies', () => {
    expect(fixture.nativeElement.querySelector('caption').innerText).toEqual('Technologies');
  });

  @Component({
    selector: `app-category-host`,
    template: `<app-category [category]="category"></app-category>`
  })
  class TestHostComponent implements OnInit {

    category: Category;

    ngOnInit(): void {
      const skills: Array<Skill> = [
        { name: 'Moteurs d\'indexation', description: 'Elasticsearch, Apache Solr' },
        { name: 'Moteurs de workflow', description: 'Activiti' }
      ];
      this.category = new Category('Technologies', skills);
    }
  }
});
