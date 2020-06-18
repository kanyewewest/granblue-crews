import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { BadgeComponent } from './badge/badge.component';
import { CardComponent } from './card/card.component';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';
import { EmojiPipe } from './pipes/emoji.pipe';
import { CardListComponent } from './card/card-list.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { IconSearchComponent } from './icon-search/icon-search.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CardSearchComponent } from './card/card-search.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    BadgeComponent,
    CardComponent,
    EmojiPickerComponent,
    EmojiPipe,
    CardListComponent,
    InfiniteScrollComponent,
    IconSearchComponent,
    SearchbarComponent,
    CardSearchComponent,
    IconFilterComponent,
  ],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  exports: [LayoutComponent, BadgeComponent, CardSearchComponent],
})
export class SharedModule {}
