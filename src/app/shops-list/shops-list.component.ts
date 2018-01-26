import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { log } from 'util';

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
      console.log(shops);
    });
  }

}
