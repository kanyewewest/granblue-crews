import { Component, OnDestroy, OnInit } from '@angular/core';
import { Card } from '@gbc/models/card';

import { InfiniteScrollService } from 'src/app/core/services/infinite-scroll.service';
import { CardService } from 'src/app/core/services/card.service';
import { InfiniteScrollStatus } from 'src/app/core/models/infinite-scroll.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [InfiniteScrollService],
})
export class CardListComponent implements OnDestroy, OnInit {
  cards: Card[] = [];
  page = 0;

  subscription: Subscription;

  constructor(
    private infiniteScrollService: InfiniteScrollService,
    private cardService: CardService,
  ) {}
  ngOnInit(): void {
    this.subscription = this.infiniteScrollService
      .filteredReachedBottom$(InfiniteScrollStatus.OBSERVING)
      .subscribe(() => this.nextPage());
    this.infiniteScrollService.status = InfiniteScrollStatus.OBSERVING;
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  nextPage() {
    ++this.page;
    this.infiniteScrollService.status = InfiniteScrollStatus.UPDATING;
    this.cardService.getCards(this.page).subscribe(
      res => {
        this.cards = this.cards.concat(res.result);
        this.page = res.page!;
        if (this.page === res.pageCount)
          this.infiniteScrollService.status = InfiniteScrollStatus.COMPLETED;
        else this.infiniteScrollService.status = InfiniteScrollStatus.OBSERVING;
      },
      err => {
        this.infiniteScrollService.status = InfiniteScrollStatus.COMPLETED;
        console.log(err);
      },
    );
  }
}
