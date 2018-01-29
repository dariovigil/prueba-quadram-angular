import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable()
export class DistanceService {

  getDistance() {
    return new Promise(
      function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
  }
}
