import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateModule } from '../animate/animate.module';
import { CoreModule } from '../core/core.module';
import { SkillsRoutingModule } from './skills-routing.module';
import { CategoryComponent } from './skills/category/category.component';
import { RatingComponent } from './skills/rating/rating.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [SkillsComponent, RatingComponent, CategoryComponent],
  imports: [
    SkillsRoutingModule,
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    FontAwesomeModule,
    CoreModule,
    AnimateModule
  ],
  exports: [SkillsComponent],
})
export class SkillsModule { }
