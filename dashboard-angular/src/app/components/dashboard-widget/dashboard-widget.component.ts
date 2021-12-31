/*
This thing is a single thing displayed in the dashboard. It is one
widget in the dashboard. It is a wrapper, wrapping the component itself
which as of now will be a RandomColorWidget or the WeatherWidget.
*/
import { Component, OnInit, Input, ViewChild, Type } from '@angular/core';
import { DashboardWidgetDirective } from './dashboard-widget.directive';

// In the other three, styles were on the DashboardWidget itself. Here, the styles must be on the parent since we're not using transclusion in Angular.
@Component({
  selector: `dashboard-widget`,
  template: `<ng-template dashboardWidget></ng-template>`,
})
export class DashboardWidgetComponent implements OnInit {
  @Input() child: any;
  @ViewChild(DashboardWidgetDirective, { static: true })
  _whereToHost!: DashboardWidgetDirective;

  constructor() { }
  ngOnInit() {
    this._whereToHost.vcr.createComponent(this.child);
  }
}
