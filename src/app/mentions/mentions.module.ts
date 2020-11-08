import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MentionsRoutingModule } from './mentions-routing.module';
import { MentionsComponent } from './mentions/mentions.component';



@NgModule({
  declarations: [MentionsComponent],
  imports: [
    MentionsRoutingModule,
    CommonModule,
    CoreModule
  ]
})
export class MentionsModule { }
