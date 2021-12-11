import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartIComponent } from './components/part-i/part-i.component';
import { FondosComponent } from './components/fondos/fondos.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    PartIComponent,
    FondosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
