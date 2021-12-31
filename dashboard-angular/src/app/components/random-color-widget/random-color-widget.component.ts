import { Component, OnInit } from '@angular/core';

@Component({
  selector: `random-color-widget`,
  template: `
    <div [ngStyle]="{backgroundColor:backgroundColor, color: color}">
      Placeholder widget
    </div>
  `,
  styles: [`
    div {
      background-color: yellow;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
     }
  `],
})
export class RandomColorWidgetComponent implements OnInit {
  backgroundColor: String = "";
  color: String = "";
  ngOnInit() {
    this.backgroundColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
    this.color = `color-contrast(${this.backgroundColor} vs black, white)`; // This'll be cool once its supported by all browsers.
  }
}
