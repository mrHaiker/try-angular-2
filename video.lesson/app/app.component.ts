import { Component } from '@angular/core';
import {MyComponent} from "./my-component";

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <my-component></my-component>
  `,
  directives: [MyComponent]
})
export class AppComponent  { name = 'Angular'; }
