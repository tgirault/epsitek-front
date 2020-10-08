import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CitationComponent } from './citation/citation.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [CitationComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    CitationComponent
  ],
  providers: [ApiService]
})
export class CoreModule {
}
