import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateModule } from '../animate/animate.module';
import { CoreModule } from '../core/core.module';
import { ServicesRoutingModule } from './services-routing.module';
import { ServiceCardComponent } from './services/service-card/service-card.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [ServicesComponent, ServiceCardComponent],
  imports: [
    ServicesRoutingModule,
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
