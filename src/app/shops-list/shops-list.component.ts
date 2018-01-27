import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ShopCardComponent } from '../shop-card/shop-card.component';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.css']
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
