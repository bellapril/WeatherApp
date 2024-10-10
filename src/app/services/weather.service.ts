import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '7b5650148c8735542dc6c63eddd0f80f';  // OpenWeather API Key
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'; // Base URL API

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`; // Menggabungkan parameter dengan benar
    return this.http.get(url); // Melakukan request ke OpenWeather API
  }
}