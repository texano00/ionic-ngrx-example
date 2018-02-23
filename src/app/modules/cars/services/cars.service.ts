import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Car } from '../models/cars';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CarsBrandsService {
  constructor(public http: HttpClient) {}

  getBrandsCars(): Observable<Car[]> {
    return this.http
      .get<any>('https://fipe.parallelum.com.br/api/v1/carros/marcas')
      .catch(error => {
        return Observable.throw(error);
      });
  }
}
