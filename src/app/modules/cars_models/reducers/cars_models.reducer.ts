import * as carsModelsActions from '../actions/cars_models.actions';
import { CarModel } from '../models/cars_models';

export function carModels(
  state = [],
  action: carsModelsActions.Actions
): CarModel[] {
  switch (action.type) {
    case carsModelsActions.LOAD_MODELS_CARS_SUCCESS: {
      return action['payload'];
    }
    default: {
      return state;
    }
  }
}
