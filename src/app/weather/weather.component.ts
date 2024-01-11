import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  myWeather:any;
  temperature:number=0;
  feelsLikeTemp:number=0;
  humidity: number=0;
  pressure: number=0;
  summary: string='';
  iconURL: string='';
  description:string='';
  city:string='Jaipur';
  temp:number=0;
  
  //units:string='metric';
  constructor(private service:WeatherService) {}

  ngOnInit():void{
   this.onFetchData()

  }
  onFetchData(){
    this.service.getWeather(this.city).subscribe((result)=>{
      //console.warn(result);
      this.myWeather=result;
     // console.log(this.myWeather);
      this.temperature=this.myWeather.main.temp;
      this.feelsLikeTemp=this.myWeather.main.feels_like;
      this.humidity=this.myWeather.main.humidity;
      this.pressure=this.myWeather.main.pressure;
      this.summary=this.myWeather.weather[0].main;
      this.description=this.myWeather.weather[0].description;
      this.temp = parseInt(this.myWeather.main.temp);
      this.iconURL='https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
    
    })
  }
  onPress(){
    this.service.getWeather(this.city).subscribe((result)=>{
      if(result){
        console.log(result)
        this.onFetchData()
      }
    })
   
   
  }

}
