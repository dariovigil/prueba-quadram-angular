import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() likes: number;
  isFav = false;
  toggle(event) {
    this.isFav = !this.isFav;
    event.target.classList.toggle('animated');
    event.target.classList.toggle('bounceIn');


  }
  constructor() { }

  ngOnInit() {
  }
}
