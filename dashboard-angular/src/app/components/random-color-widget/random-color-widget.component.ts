import { Component, OnInit } from '@angular/core';

@Component({
  selector: `random-color-widget`,
  template: `
    <div [ngStyle]="{backgroundColor:backgroundColor}">
      Placeholder widget
    </div>
  `,
  styles: [`
    div {
      background-color: yellow;
      height: 100%;
    }
  `],
})
export class RandomColorWidgetComponent implements OnInit {
  backgroundColor: string = "";
  ngOnInit() {
    this.backgroundColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  }
}
