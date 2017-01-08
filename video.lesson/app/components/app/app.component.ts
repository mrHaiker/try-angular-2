import {Component, Inject} from '@angular/core';
import {Car} from "../../services/car-service";
import {Tires} from "../../services/tires-service";
import {Engine} from "../../services/engine-service";
import {Body} from "../../services/body-service";
import {setTimeout} from "timers";

@Component({
  selector: 'my-app',
  template: `
    <h2>Color: {{ color }}</h2>
    <todos></todos>
    <hr>
    <p>{{ name | uppercase }}</p>
    <p>{{ today | date:'medium' }}</p>
    <p>{{ number | currency:"USD":"true" }}</p>
    <p>{{ promise | async }}</p>
    `,
  providers: [Car, Body, Engine, Tires]
})

export class AppComponent  {
  private color: string;
  private name: string;
  private today: Date;
  private number: number;
  private promise: any;

  constructor(@Inject(Car) car:any){
    this.color = car.body.color;
    this.name = 'John Doe';
    this.today = new Date();
    this.number = 5;

    this.promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hey, I\`m a promise');
      }, 2000);
    })
  }
}
