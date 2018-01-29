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
  rateToStars: number;
  @Input() name: string;
  @Input() imgSrc: string;
  @Input() valorations: number;
  @Input() likes: number;
  @Input() rate: number;
  @Input() userLocation: any;
  @Input() shopLat: any;
  @Input() shopLong: any;
  distanceToStore: any = 777;
  constructor(private distanceService: DistanceService) { }
  ngOnInit() {
    this.rateToStars = this.rate / 2;
    // tslint:disable-next-line:max-line-length
    // this.distanceToStore = this.distanceService.getDistance(this.userLocation.latitude, this.userLocation.longitude, this.shopLat, this.shopLong, 'K');
    // tslint:disable-next-line:max-line-length
    // setTimeout(() => {this.distanceToStore = this.distanceService.getDistance(this.userLocation.latitude, this.userLocation.longitude, this.shopLat, this.shopLong, 'K'); }, 4000);
    // navigator.geolocation.getCurrentPosition(this.success);
    setTimeout(() => { 
      this.distanceToStore = this.distanceService.getDistance(this.shopLat, this.shopLong);
      console.log(this.distanceToStore);
    }, 4000);
    
    // setTimeout(() => {this.distanceToStore = this.distanceService.getDistance(this.userLocation.latitude, this.userLocation.longitude, this.shopLat, this.shopLong, 'K'); }, 4000);
    // tslint:disable-next-line:max-line-length
  }
  // success(pos) {
  //   console.log('position received: ' + pos.coords.longitude);
  }

