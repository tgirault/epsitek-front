import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { AnimateModule } from '../animate/animate.module';
import { BannerComponent } from './banner/banner.component';
import { TypeWriterComponent } from './banner/type-writer/type-writer.component';
import { CitationComponent } from './citation/citation.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ApiService } from './services/api.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    MenuComponent,
    BannerComponent,
    TypeWriterComponent,
    FooterComponent,
    TitleComponent,
    CitationComponent,
    SpinnerComponent
  ],
  imports: [
    TranslateModule.forChild(),
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    FontAwesomeModule,
    FlexLayoutModule,
    AnimateModule
  ],
  exports: [
    MenuComponent,
    BannerComponent,
    FooterComponent,
    TitleComponent,
    CitationComponent,
    SpinnerComponent
  ],
  providers: [ApiService]
})
export class CoreModule {
}
