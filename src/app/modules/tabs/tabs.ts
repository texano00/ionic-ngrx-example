import { Component } from '@angular/core';
import { CarBrandsPage } from '../cars/cars.component';
import { ToDoPage } from '../todo/todo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = CarBrandsPage;
  tab2Root = ToDoPage;

  constructor() {}
}
