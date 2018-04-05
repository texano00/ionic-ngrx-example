// Ionic
import { IonicModule } from 'ionic-angular';

// Angular
import { NgModule } from '@angular/core';

// Todo
import { CarModelsPage } from './cars_models.component';
import { StoreModule } from '@ngrx/store';
import { carModels } from './reducers/cars_models.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarsModelsEffects } from './effects/cars_models.effects';
import { CarsModelsService } from './services/cars_models.service';

@NgModule({
  declarations: [CarModelsPage],
  imports: [
    IonicModule.forRoot(CarModelsPage),
    StoreModule.forFeature('carsModels', carModels),
    EffectsModule.forFeature([CarsModelsEffects])
  ],
  providers: [CarsModelsService]
})
export class CarModelsModule {}
