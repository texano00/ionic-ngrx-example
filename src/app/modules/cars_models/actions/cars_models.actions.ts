import { Action } from '@ngrx/store';
import { CarModel } from '../models/cars_models';

export const LOAD_MODELS_CARS = '[ModelsCars] LOAD_MODELS_CARS';

export const LOAD_MODELS_CARS_SUCCESS = '[ModelsCars] LOAD_MODELS_CARS_SUCCESS';

export const LOAD_MODELS_CARS_ERROR = '[ModelsCars] LOAD_MODELS_CARS_ERROR';

export class GetCarsModelAction implements Action {
  readonly type = LOAD_MODELS_CARS;
}

export class GetCarsModelSuccessAction implements Action {
  readonly type = LOAD_MODELS_CARS_SUCCESS;
  constructor(public payload: CarModel[]) {}
}

export class GetCarsModelErrorAction implements Action {
  readonly type = LOAD_MODELS_CARS_ERROR;
  constructor(public payload: any) {}
}

/**
 * Esporto gli alias di ogni action
 * I reducer potranno facilmente riferirsi a delle action
 */
export type Actions =
  | GetCarsModelAction
  | GetCarsModelErrorAction
  | GetCarsModelSuccessAction;
