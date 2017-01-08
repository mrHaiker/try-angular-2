import {Component, Inject} from '@angular/core';
import {Car} from "../../services/car-service";
import {Tires} from "../../services/tires-service";
import {Engine} from "../../services/engine-service";
import {Body} from "../../services/body-service";

@Component({
  selector: 'my-app',
  template: `
    <h2>Color: {{ color }}</h2>
  <todos></todos>
  `,
  providers: [Car, Body, Engine, Tires]
})
export class AppComponent  {
  private color: string;
  constructor(@Inject(Car) car:any){
    this.color = car.body.color;
  }
}
