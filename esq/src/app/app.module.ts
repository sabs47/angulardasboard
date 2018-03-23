import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SearchPipe } from "./filters/search.pipe";

import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { HelpSupportComponent } from './components/help-support/help-support.component';
import { MenuComponent } from './components/menu/menu.component';
import { GotoTopComponent } from './components/goto-top/goto-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';

const appRoutes: Routes = [
  { path: '', component: LandingpageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'FAQS', component: FaqsComponent},
  { path: 'help-support', component: HelpSupportComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    AboutComponent,
    CareersComponent,
    FaqsComponent,
    HelpSupportComponent,
    MenuComponent,
    GotoTopComponent,
    FooterComponent,
    BlogComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
