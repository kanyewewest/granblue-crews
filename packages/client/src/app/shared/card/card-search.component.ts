import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { CardService } from 'src/app/core/services/card.service';
import { FilterHostDirective } from './filter-host.directive';
import { FilterFormComponent } from 'src/app/core/components/filter-form.component';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent {
  @ViewChild(FilterHostDirective, { static: true })
  filterHost: FilterHostDirective;
  filtersForm = this.cardService.filtersForm;

  constructor(
    private cardService: CardService,
    private cf: ComponentFactoryResolver,
  ) {}

  onSubmit() {
    this.cardService.search();
  }
  ngOnInit(): void {
    const componentFactory = this.cf.resolveComponentFactory(
      this.cardService.filterFormComponent,
    );
    const component = this.filterHost.viewContainerRef.createComponent<
      FilterFormComponent
    >(componentFactory);
    component.instance.filtersForm = this.filtersForm;
  }
}
