import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutUsComponent, ContactUsComponent, NotFoundComponent } from './other-components/other-components.component';
import { DailyWeatherWidgetComponent } from './components/daily-weather-widget/daily-weather-widget.component';
import { DashboardWidgetComponent } from './components/dashboard-widget/dashboard-widget.component';
import { RandomColorWidgetComponent } from './components/random-color-widget/random-color-widget.component';
import { DashboardWidgetDirective } from './components/dashboard-widget/dashboard-widget.directive';
import { ForecastFCComponent } from './components/daily-weather-widget/forecast-fc.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    DailyWeatherWidgetComponent,
    DashboardWidgetComponent,
    RandomColorWidgetComponent,
    DashboardWidgetDirective,
    ForecastFCComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    appRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
