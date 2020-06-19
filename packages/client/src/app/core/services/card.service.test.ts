import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Card } from '@gbc/models/card';
import { CardService } from './card.service';
import { Paginated } from '@gbc/models/pagination';
import { CrewFilterComponent } from 'src/app/crew/crew-filter/crew-filter.component';

@Injectable({
  providedIn: 'root',
})
export class TestCardService extends CardService {
  filterFormComponent = CrewFilterComponent;
  filtersForm = this.fb.group({
    search: [''],
  });
  constructor(private api: ApiService, private fb: FormBuilder) {
    super();
  }

  getCards = (_page: number, _limit = 4): Observable<Paginated<Card>> => {
    const params = this.api.createHttpParams({
      _page,
      _limit,
      ...this.filtersForm.value,
    });
    return this.api.get(`/card`, params).pipe(
      map(cards => {
        const paginatedCard: Paginated<Card> = {
          pageCount: 3,
          page: _page,
          result: cards,
        };
        return paginatedCard;
      }),
    );
  };
}
