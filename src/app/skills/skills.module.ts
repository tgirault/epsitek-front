import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from './rating/rating.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [SkillsComponent, RatingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [SkillsComponent],
})
export class SkillsModule { }
