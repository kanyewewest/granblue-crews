import { Component, Input } from '@angular/core';
import { Card } from '@gbc/models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() cards: Card[] = [];

  constructor() {}
}
