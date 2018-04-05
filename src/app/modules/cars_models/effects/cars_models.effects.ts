import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { CarsModelsService } from '../services/cars_models.service';
import * as carsModelsActions from '../actions/cars_models.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Injectable()
export class CarsModelsEffects {
  @Effect()
  loadAgenda$: Observable<Action> = this.actions$
    .ofType(carsModelsActions.LOAD_MODELS_CARS)
    .switchMap(() =>
      this.carsModelsService
        .getModelsCars()
        .map(data => {
          return new carsModelsActions.GetCarsModelSuccessAction(
            data['modelos']
          );
        })
        .catch(error => {
          return [new carsModelsActions.GetCarsModelErrorAction(error)];
        })
    );

  constructor(
    private carsModelsService: CarsModelsService,
    private actions$: Actions
  ) {}
}
