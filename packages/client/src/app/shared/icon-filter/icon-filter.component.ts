import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-filter',
  templateUrl: './icon-filter.component.html',
  styleUrls: ['./icon-filter.component.scss'],
})
export class IconFilterComponent {
  @Input() width: number; //pixels
  @Input() height: number; //pixels
  @Input() color: string;
  constructor() {}
}
