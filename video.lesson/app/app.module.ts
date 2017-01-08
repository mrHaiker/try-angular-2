import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {MyComponent} from "./my-component";
import {TodosComponent} from "./todo-component";
import {FormsModule} from "@angular/forms";

const Components = [
  AppComponent,
  MyComponent,
  TodosComponent
];

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],
  declarations: [ ...Components ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
