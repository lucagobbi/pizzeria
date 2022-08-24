import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DoveSiamoComponent } from './dove-siamo/dove-siamo.component';
import {AgmCoreModule} from '@agm/core';
import { ContattaciComponent } from './contattaci/contattaci.component';
import { PizzeComponent } from './pizze/pizze.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DoveSiamoComponent,
    ContattaciComponent,
    PizzeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ClipboardModule,
    MatTooltipModule,
    MatChipsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCu630vY-395sEsohqS_CsBWmIMWYmO8aI'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
