import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
import { DataService } from '../services/data.service';
import { ShopCardComponent } from '../shop-card/shop-card.component';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.css'],
  animations: [
    trigger('fade', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})
export class ShopsListComponent implements OnInit {
  shops: Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getShops().subscribe(shops => {
      this.shops = shops.data;
      console.log(this.shops);
    });
  }
}
