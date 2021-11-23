import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './sections/home-page/home-page.component';
import { AboutPageComponent } from './sections/about-page/about-page.component';
import { WorksPageComponent } from './sections/works-page/works-page.component';
import { SkillsPageComponent } from './sections/skills-page/skills-page.component';
import { ContactPageComponent } from './sections/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomePageComponent,
    AboutPageComponent,
    WorksPageComponent,
    SkillsPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
