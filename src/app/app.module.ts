import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { CityWeatherComponent } from './components/city-weather/city-weather.component';

@NgModule({
    declarations: [AppComponent, WeatherListComponent, CityWeatherComponent],
    imports: [BrowserModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
