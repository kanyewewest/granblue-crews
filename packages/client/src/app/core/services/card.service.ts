import { Observable, Subject } from 'rxjs';
import { Type } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Card } from '@gbc/models/card';
import { Paginated } from '@gbc/models/pagination';

export abstract class CardService {
  abstract filtersForm: FormGroup;
  abstract filterFormComponent: Type<any>;
  searchSubject = new Subject<void>();
  search$ = this.searchSubject.asObservable();
  search(): void {
    this.searchSubject.next();
  }
  abstract getCards: (page: number) => Observable<Paginated<Card>>;
}
