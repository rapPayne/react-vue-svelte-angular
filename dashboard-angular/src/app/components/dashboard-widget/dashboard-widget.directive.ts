import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dashboardWidget]'
})
export class DashboardWidgetDirective {

  constructor(public vcr: ViewContainerRef) { }

}
