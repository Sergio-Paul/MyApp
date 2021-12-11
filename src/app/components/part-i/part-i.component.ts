import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-part-i',
  templateUrl: './part-i.component.html',
  styleUrls: ['./part-i.component.css']
})
export class PartIComponent implements OnInit {
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
