import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CarModel } from '../models/cars_models';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CarsModelsService {
  constructor(public http: HttpClient) {}

  getModelsCars(): Observable<CarModel[]> {
    return this.http
      .get<any>(
        'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos'
      )
      .catch(error => {
        return Observable.throw(error);
      });
  }
}
