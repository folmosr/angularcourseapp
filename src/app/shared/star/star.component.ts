import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth = this.rating * 15; // this.rating * 75/5 (75 width, 5 stars)
  }
  @Input()
  rating: number = 0;
  cropWidth: number = 75;

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
  }
}
