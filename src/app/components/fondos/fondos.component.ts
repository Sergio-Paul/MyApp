import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.component.html',
  styleUrls: ['./fondos.component.css']
})
export class FondosComponent implements OnInit {
  location = { cityName: 'Zacatecas', countryCode: 'MX' };
  weather ;
  constructor( public WeatherService: WeatherService){

  }

  ngOnInit() {
    this.getWeather(this.location.cityName, this.location.countryCode);
  }

  getWeather(cityName: string, countryCode: string) {
    this.WeatherService
      .getWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }
}
