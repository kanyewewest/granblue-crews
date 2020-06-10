import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CardService } from 'src/app/core/services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
})
export class CardSearchComponent {
  searchForm = this.fb.group({
    search: [''],
  });
  constructor(private fb: FormBuilder, private cardService: CardService) {}

  onSubmit() {
    this.cardService.search(this.searchForm.value);
  }
}
