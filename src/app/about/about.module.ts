import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CoreModule } from '../core/core.module';
import { AboutComponent } from './about/about.component';
import { DashboardCardComponent } from './about/dashboard/dashboard-card/dashboard-card.component';
import { DashboardComponent } from './about/dashboard/dashboard.component';



@NgModule({
  declarations: [AboutComponent, DashboardComponent, DashboardCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FlexLayoutModule,
    CoreModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
