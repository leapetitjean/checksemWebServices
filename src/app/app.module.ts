import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ProjetsService } from '../app/services/projets.service';
import { HeaderComponent } from './header/header.component';
import { WebservicesComponent } from './webservices/webservices.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebservicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  providers: [ProjetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
