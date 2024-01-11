import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http:HttpClient) { }


  getWeather(city:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=2adbccc2edc643b53f69c1adb10cd001&units=metric')
  }

  
}
