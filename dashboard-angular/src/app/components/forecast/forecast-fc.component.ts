import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/types/Forecast';
import { codes } from '../../weatherCodes';

@Component({
  selector: 'forecast',
  templateUrl: './forecast-fc.component.html',
  styleUrls: ['./forecast-fc.component.css']
})
export class ForecastFCComponent implements OnInit {
  @Input() forecast: Forecast = { time: "", weatherCode: 0 };
  dayOfWeek: String = "";
  codes: String[] = codes;
  imgSrc: String = "";

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = `/assets/images/${this.forecast.weatherCode}.png`;
    this.dayOfWeek = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
    }).format(new Date(this.forecast.time))
  }
}
