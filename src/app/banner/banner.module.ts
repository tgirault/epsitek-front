import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner.component';
import { TypeWriterComponent } from './type-writer/type-writer.component';



@NgModule({
  declarations: [BannerComponent, TypeWriterComponent],
  imports: [
    CommonModule
  ],
  exports: [BannerComponent]
})
export class BannerModule { }
