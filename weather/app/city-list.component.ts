import {Component} from "@angular/core";import {WeatherService, City} from "./weather.service";@Component({    providers: [WeatherService],    templateUrl: '/app/city-list.component.html'})export default class CityListComponent {    cities: Array<City> = this.weatherService.cities;    constructor(private weatherService: WeatherService) {}}