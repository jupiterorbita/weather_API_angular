import { HttpClientModule } from '@angular/common/http';
import { CityfindService } from './cityfind.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChicagoComponent } from './chicago/chicago.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ChicagoComponent,
    SeattleComponent,
    SanjoseComponent,
    // PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CityfindService],
  bootstrap: [AppComponent]
})
export class AppModule { }
