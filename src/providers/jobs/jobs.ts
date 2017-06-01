import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

import {Job} from "../../models/jobs";

/*
  Generated class for the JobsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JobsProvider {
  apiUrl = "10.....";
  constructor(public http: Http) { }

  load(): any/*Observable<Job[]>*/ {
    console.log("DA");
    return this.http.get(this.apiUrl+"/users")
      .map(res => <Job>res.json());
  }

}
