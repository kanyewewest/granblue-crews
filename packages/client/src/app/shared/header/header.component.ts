import { Component, Input } from '@angular/core';
import { HeaderNavItem } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() navItems: HeaderNavItem[];

  constructor() {}
}
