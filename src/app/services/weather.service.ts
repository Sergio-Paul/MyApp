import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
  apiKey: string = 'cf19cb93e745f07e63f3b4302f7ac47e';
  URI: string = '';

  constructor( public http : HttpClient) {
    this.URI= `http://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`
   }

   getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}