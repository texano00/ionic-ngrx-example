// Ionic
import { IonicModule } from 'ionic-angular';

// Angular
import { NgModule } from '@angular/core';

// Todo
import { CarBrandsPage } from './cars.component';
import { StoreModule } from '@ngrx/store';
import { carBrands } from './reducers/cars.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarsBrandsEffects } from './effects/cars.effects';
import { CarsBrandsService } from './services/cars.service';

@NgModule({
  declarations: [CarBrandsPage],
  imports: [
    IonicModule.forRoot(CarBrandsPage),
    StoreModule.forFeature('carsBrands', carBrands),
    EffectsModule.forFeature([CarsBrandsEffects])
  ],
  providers: [CarsBrandsService]
})
export class CarBrandsModule {}
