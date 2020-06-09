import { Observable, Subject } from 'rxjs';
import { Card } from '@gbc/models/card';
import { Paginated } from '@gbc/models/pagination';

export abstract class CardService {
  filters: object = {};
  searchSubject = new Subject<void>();
  search$ = this.searchSubject.asObservable();
  search(filters: object): void {
    this.filters = filters;
    this.searchSubject.next();
  }
  abstract getCards: (page: number) => Observable<Paginated<Card>>;
}
