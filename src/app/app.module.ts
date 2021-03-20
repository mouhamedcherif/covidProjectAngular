import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './content/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ListhopitalComponent } from './content/hopital/listhopital/listhopital.component';
import { AddhopitalComponent } from './content/hopital/addhopital/addhopital.component';
import { UpdateRdvComponent } from './content/hopital/update-rdv/update-rdv.component';
import { ProfilmedcinComponent } from './content/medecin/profilmedcin/profilmedcin.component';
import { ProfilpatientComponent } from './content/patient/profilpatient/profilpatient.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ListhopitalComponent,
    AddhopitalComponent,
    UpdateRdvComponent,
    ProfilmedcinComponent,
    ProfilpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
