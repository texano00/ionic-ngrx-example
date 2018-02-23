import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as carsAction from './actions/cars.actions';
import { Store } from '@ngrx/store';
import { Car } from './models/cars';
import { AppState } from '../../app.state';

@Component({
  templateUrl: 'cars.html'
})
export class CarBrandsPage {
  public carBrands$: Observable<Car[]>;

  constructor(public navCtrl: NavController, public store: Store<AppState>) {
    this.carBrands$ = store.select('carsBrands');
  }
  ngOnInit() {
    this.store.dispatch(new carsAction.GetCarsBrandAction());
  }
}
