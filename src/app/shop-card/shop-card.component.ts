import { Component, OnInit, Input } from '@angular/core';
import { LikesComponent } from '../likes/likes.component';


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
  constructor() { }

  ngOnInit() {
  }

}
