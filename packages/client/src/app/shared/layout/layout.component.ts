import { Component, OnInit } from '@angular/core';
import { HeaderNavItem } from '@gbc/models/header';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  navItems: HeaderNavItem[];
  constructor() {}
  ngOnInit(): void {
    this.navItems = [
      {
        name: 'Crews',
        url: '/crews',
      },
      {
        name: 'Players',
        url: '/players',
      },
    ];
  }
}
