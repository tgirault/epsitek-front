import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
