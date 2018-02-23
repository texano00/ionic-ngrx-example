import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { CarsBrandsService } from '../services/cars.service';
import * as carsActions from '../actions/cars.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class CarsBrandsEffects {
  /**
   * Effetto che intercetta l'azione LOAD_BRAND_CARS di uno specifico evento.
   * Viene invocato il corretto service passando come parametro l'id
   * dell'evento.
   */
  @Effect()
  loadAgenda$: Observable<Action> = this.actions$
    .ofType(carsActions.LOAD_BRAND_CARS)
    .switchMap(() =>
      this.carsBrandsService
        .getBrandsCars()
        .map(data => {
          return new carsActions.GetCarsBrandSuccessAction(data);
        })
        .catch(error => {
          return [new carsActions.GetCarsBrandErrorAction(error)];
        })
    );

  constructor(
    private carsBrandsService: CarsBrandsService,
    private actions$: Actions
  ) {}
}
