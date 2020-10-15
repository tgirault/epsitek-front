import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimateComponent } from './animate.component';
import { AnimateDirective } from './animate.directive';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule
  ],
  declarations: [AnimateComponent, AnimateDirective],
  exports: [AnimateComponent, AnimateDirective]
})
export class AnimateModule { }
