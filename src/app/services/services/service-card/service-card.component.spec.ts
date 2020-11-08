import { Component, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Service } from '../model/service.data';
import { ServiceCardComponent } from './service-card.component';


describe('ServiceCardComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceCardComponent, TestHostComponent]
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

  it('should show icon device_hub', () => {
    expect(fixture.nativeElement.querySelector('mat-icon').innerText).toEqual('device_hub');
  });

  it('should show title Architecture', () => {
    expect(fixture.nativeElement.querySelector('h1').innerText).toEqual('Architecture');
  });

  it('should show description', () => {
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual('Mise en place d\'une architecture adaptée à vos besoins et vos contraintes.');
  });

  @Component({
    selector: `app-service-card-host`,
    template: `<app-service-card [service]="service"></app-service-card>`
  })
  class TestHostComponent implements OnInit {

    service: Service;

    ngOnInit(): void {
      this.service = {
        icon: 'device_hub',
        title: 'Architecture',
        description: 'Mise en place d\'une architecture adaptée à vos besoins et vos contraintes.',
        items: [
          'Etude technique, prototypage'
        ]
      };
    }
  }
});
