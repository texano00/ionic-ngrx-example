import * as carsActions from '../actions/cars.actions';
import { Car } from '../models/cars';

export function carBrands(state = [], action: carsActions.Actions): Car[] {
  switch (action.type) {
    case carsActions.LOAD_BRAND_CARS_SUCCESS: {
      return action['payload'];
    }
    default: {
      return state;
    }
  }
}
