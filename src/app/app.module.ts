import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightContentComponent } from './right-content/right-content.component';

import { AboutComponent } from './right-content/about/about.component';
import { ResumeComponent } from './right-content/resume/resume.component';
import { ContactComponent } from './right-content/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path:'', component: AboutComponent},
  {path:'resume', component: ResumeComponent},
  {path:'contact', component: ContactComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    NavbarComponent,
    RightContentComponent,
    
    AboutComponent,
    
    ResumeComponent,
    
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
