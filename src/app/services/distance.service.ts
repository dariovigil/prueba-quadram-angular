import { Injectable } from '@angular/core';
import { log } from 'util';

@Injectable()
export class DistanceService {

  // constructor() { }
  private shopLat: number;
  private shopLong: number;
  private userLat: number;
  private userLong: number;
  // userLat = 40.408995600000004;
  // userLong = -3.6684342999999995;

  getDistance(shopLat, shopLong) {
    console.log('inside getdistance');
    this.shopLat = shopLat;
    this.shopLong = shopLong;
    // console.log(`shop lat es ${this.shopLat}`)
    navigator.geolocation.getCurrentPosition(this.success.bind(this));
  }

  success(pos) {
    this.userLat = pos.coords.latitude;
    this.userLong = pos.coords.longitude;
    this.calcDistance();
  }
  calcDistance() {
    console.log(this);
    const raduserLat = Math.PI * this.userLat / 180;
    const radshopLat = Math.PI * this.shopLat / 180;
    const theta = this.userLong - this.shopLong;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(raduserLat) * Math.sin(radshopLat) + Math.cos(raduserLat) * Math.cos(radshopLat) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180 / Math.PI) * 1.609344;
    console.log(dist);
    return dist;
  }
  // calcDistance(lat1, lon1, lat2, lon2, unit) {
  //   const radlat1 = Math.PI * lat1 / 180;
  //   const radlat2 = Math.PI * lat2 / 180;
  //   const theta = lon1 - lon2;
  //   const radtheta = Math.PI * theta / 180;
  //   let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  //   dist = Math.acos(dist);
  //   dist = dist * 180 / Math.PI;
  //   dist = dist * 60 * 1.1515;
  //   if (unit === 'K') { dist = dist * 1.609344; }
  //   if (unit === 'N') { dist = dist * 0.8684; }
  //   return dist;
  // }
}
