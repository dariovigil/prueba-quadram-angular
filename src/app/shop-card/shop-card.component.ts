import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {
  @Input() name: string;
  @Input() imgSrc: string;
  @Input() valorations: number;
  constructor() { }

  ngOnInit() {
  }

}
