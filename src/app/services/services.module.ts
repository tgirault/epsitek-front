import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule
  ],
  exports: [ServicesComponent],
})
export class ServicesModule { }
