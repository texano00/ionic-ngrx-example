import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as carsModelsAction from './actions/cars_models.actions';
import { Store } from '@ngrx/store';
import { CarModel } from './models/cars_models';
import { AppState } from '../../app.state';

@Component({
  templateUrl: 'cars_models.html'
})
export class CarModelsPage {
  public carBrands$: Observable<CarModel[]>;

  constructor(public navCtrl: NavController, public store: Store<AppState>) {
    this.carBrands$ = store.select('carsModels');
  }
  ngOnInit() {
    this.store.dispatch(new carsModelsAction.GetCarsModelAction());
  }
}
