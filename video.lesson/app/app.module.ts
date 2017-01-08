import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {MyComponent} from "./my-component";
import {TodosComponent} from "./todo-component";

const Components = [
  AppComponent,
  MyComponent,
  TodosComponent
];

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ...Components ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
