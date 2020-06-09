import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-search',
  templateUrl: './icon-search.component.html',
  styleUrls: ['./icon-search.component.scss'],
})
export class IconSearchComponent {
  @Input() width: number; //pixels
  @Input() height: number; //pixels
  @Input() color: string;

  constructor() {}
}
