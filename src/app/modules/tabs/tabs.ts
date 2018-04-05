import { Component } from '@angular/core';
import { CarBrandsPage } from '../cars/cars.component';
import { CarModelsPage } from '../cars_models/cars_models.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = CarBrandsPage;
  tab2Root = CarModelsPage;

  constructor() {}
}
