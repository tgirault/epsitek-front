import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { CoreModule } from 'src/app/core/core.module';
import { ContactFormComponent } from './contact-form.component';


describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [
        ReactiveFormsModule,
        CoreModule,
        MatSnackBarModule,
        RecaptchaModule,
        RecaptchaFormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
