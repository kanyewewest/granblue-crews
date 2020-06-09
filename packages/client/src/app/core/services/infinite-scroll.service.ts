import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { InfiniteScrollStatus } from '../models/infinite-scroll.model';

@Injectable()
export class InfiniteScrollService {
  status = InfiniteScrollStatus.UNINITIALIZED;
  private reachedBottomSubject = new BehaviorSubject<InfiniteScrollStatus>(
    this.status,
  );
  reachedBottom$ = this.reachedBottomSubject.asObservable();

  filteredReachedBottom$(status: InfiniteScrollStatus) {
    return this.reachedBottom$.pipe(filter(x => x === status));
  }

  reachedBottom() {
    this.reachedBottomSubject.next(this.status);
    this.status = InfiniteScrollStatus.UPDATING;
  }
}
