import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [CustomersComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatStepperModule,
    MatListModule,
    FontAwesomeModule
  ],
  exports: [CustomersComponent],
})
export class CustomersModule { }
