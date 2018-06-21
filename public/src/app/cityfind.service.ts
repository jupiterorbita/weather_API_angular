import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CityfindService {
  constructor(private _http: HttpClient) {
   }

// ========== GET SEATTLE ===========
   getWeatherSeattle() {
    console.log('going to get weather from the server');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=98114,us&APPID=892b250333f671f7ddb449a0faa3ad10');
  }

  // ========== GET CHICAGO ===========
  getWeatherChicago() {
    console.log('going to get weather form server for chicago');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=60612,us&APPID=892b250333f671f7ddb449a0faa3ad10');
  }

  // ========== GET SAN JOSE ===========
  getWeatherSanJose() {
    console.log('going to get weather form server for san JOSE');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?zip=95112,us&APPID=892b250333f671f7ddb449a0faa3ad10');
  }
}
