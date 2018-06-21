import { CityfindService } from './../cityfind.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather: any;
  fahrenheit: any;
  humidity: any;
  status_main: any;
  status_description: any;
  constructor(private _cityfindService: CityfindService) { }

  ngOnInit() {
    this.showWeatherChicago();
  }


  showWeatherChicago() {
    console.log('init get request from server for showWeatherChicago()');
    const getChicagoObserve = this._cityfindService.getWeatherChicago();
    getChicagoObserve.subscribe(server_response => {
        console.log('got back from chigago and got', server_response);
        this.weather = server_response;
        console.log('weather =>', this.weather);
        const kelvin = this.weather['main'].temp;
        this.humidity = this.weather['main'].humidity;
        this.fahrenheit = Math.round((kelvin - 273.15) * 9 / 5 + 32);
        this.status_main = this.weather.weather[0].main;
        this.status_description = this.weather.weather[0].description;
      }
    );

  }
}
