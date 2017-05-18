import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

import {Job} from '../models/job';

/*
  Generated class for the JobsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JobsProvider {

  constructor(public http: Http) {
    console.log('Hello JobsProvider Provider');
  }

  load(): any{

  }

}
