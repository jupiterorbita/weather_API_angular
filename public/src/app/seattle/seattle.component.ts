import { CityfindService } from './../cityfind.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  fahrenheit: any;
  humidity: any;
  status_main: any;
  status_description: any;
  constructor(
    private _cityfindService: CityfindService
  ) { }

  ngOnInit() {
    this.showWeatherSeattle();
  }

  showWeatherSeattle() {
    console.log('initializing get request from server for showWeather()');
    const getCakesObservable = this._cityfindService.getWeatherSeattle();
    getCakesObservable.subscribe(server_response => {
      console.log('got ALLcakes from server =>', server_response);
      this.weather = server_response;
      console.log('weather =>', this.weather);
      const kelvin = this.weather['main'].temp;
      this.humidity = this.weather['main'].humidity;
      this.fahrenheit = Math.round((kelvin - 273.15) * 9 / 5 + 32);
      this.status_main = this.weather.weather[0].main;
      this.status_description = this.weather.weather[0].description;

    });
  }

}
