import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [ServicesComponent],
})
export class ServicesModule { }
