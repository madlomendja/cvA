import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainindexComponent } from './mainindex/mainindex.component';
import { MainformationComponent } from './mainformation/mainformation.component';
import { MaincompetenceComponent } from './maincompetence/maincompetence.component';
import { MainrealisationsComponent } from './mainrealisations/mainrealisations.component';
import { MaincontactComponent } from './maincontact/maincontact.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainindexComponent,
    MainformationComponent,
    MaincompetenceComponent,
    MainrealisationsComponent,
    MaincontactComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
