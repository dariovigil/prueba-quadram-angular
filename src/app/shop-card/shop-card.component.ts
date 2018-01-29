import { Component, OnInit, Input } from '@angular/core';
import { LikesComponent } from '../likes/likes.component';
import { DistanceService } from '../services/distance.service';
import { log } from 'util';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  @Input() name: string;
  @Input() imgSrc: string;
  @Input() valorations: number;
  @Input() likes: number;
  @Input() rate: number;
  @Input() userLocation: any;
  @Input() shopLat: any;
  @Input() shopLong: any;
  rateToStars: number;
  distanceToStore: any;
  userLat: number;
  userLong: number;

  calcDistance(lat1, lon1, lat2, lon2, unit) {
      const radlat1 = Math.PI * lat1 / 180;
      const radlat2 = Math.PI * lat2 / 180;
      const theta = lon1 - lon2;
      const radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === 'K') { dist = dist * 1.609344; }
      if (unit === 'N') { dist = dist * 0.8684; }
      return dist;
    }
  constructor(private distanceService: DistanceService) { }
  ngOnInit() {
    this.rateToStars = this.rate / 2;
    this.distanceService.getDistance()
      .then((position) => {
        this.distanceToStore = this.calcDistance(position.coords.latitude, position.coords.longitude, this.shopLat, this.shopLong, 'K');
      });
  }
}


