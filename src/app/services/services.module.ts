import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    FontAwesomeModule
  ],
  exports: [ServicesComponent],
})
export class ServicesModule { }
