import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private API_KEY: string = environment.API_KEY;
  private API_URL: string = environment.API_URL;
  private APP_VERSION: string = environment.APP_VERSION;
  private headers = new Headers({
    'Content-type': 'application/json',
    'apikey': 'base64:y7sNK8BCEJThgfxT4eTpXOg34eXk9pmpGMmPNr2zMvM=',
    'appVersion': '0.0.1'
  });
  private options = new RequestOptions({ headers: this.headers });


  constructor(private http: Http) { }

  getShops() {
    return this.http.get(this.API_URL, this.options).map(res => res.json());
  }
}
