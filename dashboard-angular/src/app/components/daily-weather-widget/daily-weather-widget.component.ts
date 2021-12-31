import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/types/Forecast';

@Component({
  selector: 'app-daily-weather-widget',
  templateUrl: './daily-weather-widget.component.html',
  styleUrls: ['./daily-weather-widget.component.css']
})
export class DailyWeatherWidgetComponent implements OnInit {
  forecasts: Forecast[] = [];
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=32.98&longitude=-96.68&daily=weathercode&timezone=UTC`;
    this._http.get<ForecastResponse>(url)
      .subscribe((res: ForecastResponse) => {
        const daily = res.daily;
        this.forecasts = daily.time.slice(0, 5).map((time: any, i: number) => ({ time, weatherCode: daily.weathercode[i] }));
      })
  }
}

interface ForecastResponse {
  daily: {
    time: string[],
    weathercode: number[],
  },
}
