import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Card } from '@gbc/models/card';
import { CardService } from './card.service';
import { Paginated } from '@gbc/models/pagination';

@Injectable({
  providedIn: 'root',
})
export class TestCardService extends CardService {
  constructor(private api: ApiService) {
    super();
  }

  getCards = (_page: number, _limit = 4): Observable<Paginated<Card>> => {
    const params = this.api.createHttpParams({
      _page,
      _limit,
      ...this.filters,
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
