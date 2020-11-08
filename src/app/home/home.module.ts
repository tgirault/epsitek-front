import { NgModule } from '@angular/core';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';
import { CoreModule } from '../core/core.module';
import { ExperiencesModule } from '../experiences/experiences.module';
import { ServicesModule } from '../services/services.module';
import { SkillsModule } from '../skills/skills.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    CoreModule,
    AboutModule,
    ServicesModule,
    SkillsModule,
    ExperiencesModule,
    ContactModule,
  ]
})
export class HomeModule { }
