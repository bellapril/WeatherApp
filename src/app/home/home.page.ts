import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  weatherData: any = null;
  city: string = 'Manado'; // Default location

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather(this.city);
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe(
      data => {
        this.weatherData = data;
        console.log('Weather data received:', data);  // Log untuk memastikan data diterima
      },
      error => {
        this.weatherData = null;  // Reset weatherData jika terjadi error
        console.error('Error fetching weather data:', error);  // Log error
      }
    );
  }

  searchCity() {
    if (this.city.trim() !== '') {
      this.getWeather(this.city);
    } else {
      alert('Please enter a valid city name');
    }
  }
}