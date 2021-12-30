import { Component, OnInit } from '@angular/core';
import { DailyWeatherWidgetComponent } from '../daily-weather-widget/daily-weather-widget.component';
import { RandomColorWidgetComponent } from '../random-color-widget/random-color-widget.component';

interface Widget {
  sortOrder: number,
  component: any,  //RAP: Not sure what this should be
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  widgets: Widget[] = [];
  constructor() { }

  ngOnInit(): void {
    const randomWidgets: Widget[] = this.makeRandomWidgets();

    // Add a DailyWeatherWidget to the random widgets
    randomWidgets.push({ sortOrder: 5, component: DailyWeatherWidgetComponent });
    randomWidgets.sort((a, b) => a.sortOrder - b.sortOrder);
    this.widgets = randomWidgets;
  }

  /// Create the array of widgets for the dashboard
  makeRandomWidgets(numberOfWidgets = 25): Widget[] {
    return [...Array(numberOfWidgets)].map<Widget>((_, i) => ({
      sortOrder: i,
      component: RandomColorWidgetComponent,
    }))
  }
}
