import { Component, Input, Output, EventEmitter } from '@angular/core';

import City from '../../models/city.model';

@Component({
    selector: 'city-weather',
    templateUrl: './city-weather.component.html',
    styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent {
    @Input() city: City;
    @Output() removeCity = new EventEmitter<string>();

    constructor() {}

    removeCityTrigger() {
        this.removeCity.emit(this.city.name);
    }
}
