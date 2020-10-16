import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MentionsRoutingModule } from './mentions-routing.module';
import { MentionsComponent } from './mentions/mentions.component';



@NgModule({
  declarations: [MentionsComponent],
  imports: [
    MentionsRoutingModule,
    CommonModule
  ]
})
export class MentionsModule { }
