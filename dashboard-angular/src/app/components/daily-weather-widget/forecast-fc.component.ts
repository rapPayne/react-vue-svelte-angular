import { Component, Input, OnInit } from '@angular/core';
import { codes } from './weatherCodes';

@Component({
  selector: 'forecast',
  templateUrl: './forecast-fc.component.html',
  styleUrls: ['./forecast-fc.component.css']
})
export class ForecastFCComponent implements OnInit {
  @Input() forecast: any;
  dayOfWeek: String = "";
  codes: any = codes;
  imgSrc: String = "";

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = `/assets/images/${this.forecast.weatherCode}.png`;
    this.dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(this.forecast.time))
  }
}
