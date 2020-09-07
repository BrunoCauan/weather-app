import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

import { API } from '../config/api';
import City from '../models/city.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
    private _iconURL: string = '//s3-us-west-2.amazonaws.com/s.cdpn.io/162656';

    constructor(private httpClient: HttpClient) {}

    get(cityName: string) {
        return this.httpClient.get<City>(`${API.BASE_URL}`, {
            params: new HttpParams()
                .set('q', cityName)
                .set('units', 'metric')
                .set('appid', API.KEY),
        })
        .pipe(map(((response: any) => {
            const weatherInfo = response.weather[0],
                icon = `${this._iconURL}/${weatherInfo.icon}.svg`;

            return new City(response.name, response.sys.country, Math.round(response.main.temp), icon, weatherInfo.description);
        })));
    }
}
