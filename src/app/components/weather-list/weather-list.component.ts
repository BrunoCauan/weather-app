import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import City from './../../models/city.model';

@Component({
    selector: 'weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit {
    cityNames: string[] = [];
    cities: City[] = [];

    error: string = '';

    constructor(private _weatherService: WeatherService) {}

    ngOnInit(): void {
        this.cityNames = JSON.parse(localStorage.getItem('cities'));
        this.cityNames.forEach((cityName) => {
            this.addCity(cityName);
        });
    }

    addCity(cityName: string, addToStorage: boolean = false) {
        this._weatherService.get(cityName).subscribe(
            (city: City) => {
                const cityName = city.name,
                    cityAlreadyAdded = this.cities.find(currentCity => currentCity.name === cityName);

                if (!cityAlreadyAdded) {
                    this.cities.push(city);

                    if (addToStorage) {
                        this.cityNames.push(cityName);
                        localStorage.setItem('cities', JSON.stringify(this.cityNames));
                        this.error = '';
                    }
                } else {
                    this.error = 'City already added!';
                }
            },
            err => {
                this.error = 'Please search for a valid city!';
            }
        );
    }

    removeCity(cityName: string) {
        this.cityNames.splice(this.cityNames.findIndex(currentCity => currentCity === cityName), 1);
        this.cities.splice(this.cities.findIndex(currentCity => currentCity.name === cityName), 1);
        localStorage.setItem('cities', JSON.stringify(this.cityNames));
    }
}
