import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-weather-widget',
  templateUrl: './daily-weather-widget.component.html',
  styleUrls: ['./daily-weather-widget.component.css']
})
export class DailyWeatherWidgetComponent implements OnInit {
  forecasts: any[] = [];
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=32.98&longitude=-96.68&daily=weathercode&timezone=UTC`;
    this._http.get(url)
      .subscribe((res: any) => {
        const daily = res.daily;
        this.forecasts = daily.time.slice(0, 5).map((time: any, i: number) => ({ time, weatherCode: daily.weathercode[i] }));
      })
  }
}
