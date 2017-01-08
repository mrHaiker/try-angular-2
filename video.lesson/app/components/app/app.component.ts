import {Component, Inject} from '@angular/core';
import {Car} from "../../services/car-service";
import {Tires} from "../../services/tires-service";
import {Engine} from "../../services/engine-service";
import {Body} from "../../services/body-service";
import {setTimeout} from "timers";
import {NgForm} from "@angular/forms";
import {Post} from "../../services/post";

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app/app.component.html',
  providers: [Car, Body, Engine, Tires]
})

export class AppComponent  {
  private color: string;
  private name: string;
  private today: Date;
  private number: number;
  private promise: any;

  private categories: string[];
  private model: any;
  private submitted: boolean;

  constructor(@Inject(Car) car:any){
    this.color = car.body.color;
    this.name = 'John Doe';
    this.today = new Date();
    this.number = 5;

    // this.promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('Hey, I\`m a promise');
    //   }, 2000);
    // })'

    this.categories = ['Technologies', 'Business'];
    this.model = new Post(1, 'Post One', this.categories[0], 'This is the body', 'Brad Traversy');
    this.submitted = false;
  }
}
