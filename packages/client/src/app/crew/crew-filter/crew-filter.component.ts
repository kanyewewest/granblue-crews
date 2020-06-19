import { Input, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterFormComponent } from '../../core/components/filter-form.component';

@Component({
  selector: 'app-crew-filter',
  templateUrl: './crew-filter.component.html',
  styleUrls: ['./crew-filter.component.scss'],
})
export class CrewFilterComponent implements FilterFormComponent {
  @Input() filtersForm: FormGroup;
  constructor() {}
}
