import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [SkillsComponent],
})
export class SkillsModule { }
