import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateModule } from '../animate/animate.module';
import { CoreModule } from '../core/core.module';
import { ServicesComponent } from './services/services.component';
import { ServiceCardComponent } from './services/service-card/service-card.component';



@NgModule({
  declarations: [ServicesComponent, ServiceCardComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    FontAwesomeModule,
    FlexLayoutModule,
    CoreModule,
    AnimateModule
  ],
  exports: [ServicesComponent],
})
export class ServicesModule { }
