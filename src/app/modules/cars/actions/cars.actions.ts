import { Action } from '@ngrx/store';
import { Car } from '../models/cars';

// Action che chiamerà la API per recuperare le marche di auto
export const LOAD_BRAND_CARS = '[BrandsCars] LOAD_BRAND_CARS';

/**
 * Action per notificare che le marche di auto sono state recuperate con
 * successo
 */
export const LOAD_BRAND_CARS_SUCCESS = '[BrandsCars] LOAD_BRAND_CARS_SUCCESS';

/**
 * Action per notificare che il recupero delle marche di auto ha registrato
 * un errore
 */

export const LOAD_BRAND_CARS_ERROR = '[BrandsCars] LOAD_BRAND_CARS_ERROR';

export class GetCarsBrandAction implements Action {
  readonly type = LOAD_BRAND_CARS;
}

export class GetCarsBrandSuccessAction implements Action {
  readonly type = LOAD_BRAND_CARS_SUCCESS;
  constructor(public payload: Car[]) {}
}

export class GetCarsBrandErrorAction implements Action {
  readonly type = LOAD_BRAND_CARS_ERROR;
  constructor(public payload: any) {}
}

/**
 * Esporto gli alias di ogni action
 * I reducer potranno facilmente riferirsi a delle action
 */
export type Actions =
  | GetCarsBrandAction
  | GetCarsBrandErrorAction
  | GetCarsBrandSuccessAction;
