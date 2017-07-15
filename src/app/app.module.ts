import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DiplomesComponent } from './diplomes/diplomes.component';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';


const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'diplomes', component: DiplomesComponent },
  { path: 'experiences', component: ExperiencesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DiplomesComponent,
    ExperiencesComponent
  ],
  imports: [
   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
