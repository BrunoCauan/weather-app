import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import City from './../../models/city.model';

@Component({
    selector: 'weather-list',
    templateUrl: './weather-list.component.html',
    styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit {
    cities: City[] = [];
    error: string = '';

    constructor(private _weatherService: WeatherService) {}

    ngOnInit(): void {
        const cityNames: string[] = JSON.parse(localStorage.getItem('cities'));
        
        cityNames.forEach((cityName) => {
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
                        this.updateLocalStorage();
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
        this.cities.splice(this.cities.findIndex(currentCity => currentCity.name === cityName), 1);
        this.updateLocalStorage();
    }
    
    updateLocalStorage() {
        localStorage.setItem('cities', JSON.stringify(this.cities.map(currentCity => currentCity.name)));
    }
}
