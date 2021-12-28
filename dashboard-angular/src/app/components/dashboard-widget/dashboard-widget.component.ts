import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild, Directive } from '@angular/core';
import { DashboardWidgetDirective } from './dashboard-widget.directive';

@Component({
  selector: `dashboard-widget`,
  template: `<ng-template dashboardWidget></ng-template>`,
  styles: [`
  `],
})
export class DashboardWidgetComponent implements OnInit {
  @Input() child: any;
  @ViewChild(DashboardWidgetDirective, { static: true }) _whereToHost!: DashboardWidgetDirective;

  constructor(private _viewContainerRef: ViewContainerRef, private _componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnInit() {
    console.log('child', this.child)
    this._whereToHost.vcr.createComponent(this.child);
    // this._viewContainerRef.clear();
    // this._viewContainerRef.createComponent(this.child)
  }
}

