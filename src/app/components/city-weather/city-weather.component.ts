import { Component, Input, Output, EventEmitter } from '@angular/core';

import City from '../../models/city.model';

@Component({
    selector: 'city-weather',
    templateUrl: './city-weather.component.html',
    styleUrls: ['./city-weather.component.scss'],
})
export class CityWeatherComponent {
    @Input() city: City;
    @Input() index: number;
    @Output() removeCity = new EventEmitter<number>();

    constructor() {}

    removeCityTrigger() {
        this.removeCity.emit(this.index);
    }
}
