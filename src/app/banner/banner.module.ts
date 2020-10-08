import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerComponent } from './banner.component';
import { TypeWriterComponent } from './type-writer/type-writer.component';



@NgModule({
  declarations: [BannerComponent, TypeWriterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [BannerComponent]
})
export class BannerModule { }
