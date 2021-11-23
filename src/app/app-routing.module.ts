import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './sections/about-page/about-page.component';
import { ContactPageComponent } from './sections/contact-page/contact-page.component';
import { HomePageComponent } from './sections/home-page/home-page.component';
import { SkillsPageComponent } from './sections/skills-page/skills-page.component';
import { WorksPageComponent } from './sections/works-page/works-page.component';

const routes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'About', component: AboutPageComponent },
  { path: 'Jobs', component: WorksPageComponent },
  { path: 'Skills', component: SkillsPageComponent },
  { path: 'Contact', component: ContactPageComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
