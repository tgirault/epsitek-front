import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateModule } from '../animate/animate.module';
import { CitationComponent } from './citation/citation.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [CitationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    AnimateModule
  ],
  exports: [
    CitationComponent
  ],
  providers: [ApiService]
})
export class CoreModule {
}
