import { Car } from './modules/cars/models/cars';
import { CarModel } from './modules/cars_models/models/cars_models';

export interface AppState {
  carsBrands: Car[];
  carsModels: CarModel[];
}
