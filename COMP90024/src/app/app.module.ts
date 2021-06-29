import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NectarChartComponent } from './nectar-chart/nectar-chart.component';
import { NectarMapTweetsComponent } from './nectar-map-tweets/nectar-map-tweets.component';
import { NectarMapTwitterComponent } from './nectar-map-twitter/nectar-map-twitter.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    NectarChartComponent,
    NectarMapTweetsComponent,
    NectarMapTwitterComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
