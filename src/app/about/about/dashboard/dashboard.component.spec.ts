import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardServiceMock } from './mocks/dashboard.service.mock';
import { DashboardService } from './services/dashboard.service';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provider: DashboardService, useClass: DashboardServiceMock }
      ],
      imports: [
        CoreModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
