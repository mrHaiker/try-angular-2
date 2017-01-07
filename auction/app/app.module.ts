import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import ApplicationComponent from './components/application/application';
import CarouselComponent from "./components/carousel/carousel";
import FooterComponent from "./components/footer/footer";
import NavbarComponent from "./components/navbar/navbar";
import ProductItemComponent from "./components/product-item/product-item";
import SearchComponent from "./components/search/search";
import StarsComponent from "./components/stars/stars";
import {ProductService} from "./services/product-service";
import HomeComponent from "./components/home/home";
import ProductDetailComponent from "./components/product-detail/product-detail";

const myComponents = [
    ApplicationComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductItemComponent,
    SearchComponent,
    StarsComponent
];

@NgModule({
    imports:      [ BrowserModule,
                    HttpModule,
                    RouterModule.forRoot([
                        {path: '',                    component: HomeComponent},
                        {path: 'products/:productId', component: ProductDetailComponent}
    ]) ],
    declarations: [ ...myComponents ],
    providers:    [ ProductService,
                   {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }