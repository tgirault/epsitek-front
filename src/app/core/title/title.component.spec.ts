import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';


describe('TitleComponent', () => {
  let titleHostComponent: TitleHostComponent;
  let titleHostfixture: ComponentFixture<TitleHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleComponent, TitleHostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    titleHostfixture = TestBed.createComponent(TitleHostComponent);
    titleHostComponent = titleHostfixture.componentInstance;
    titleHostfixture.detectChanges();
  });

  it('should show COMPETENCES', () => {
    expect(titleHostfixture.nativeElement.querySelector('span').innerText).toEqual('<COMPÉTENCES/>');
  });

  @Component({
    selector: `app-title-host`,
    template: `<app-title title="compétences" image=""></app-title>`
  })
  class TitleHostComponent {
  }
});
