import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { BadgeComponent } from './badge/badge.component';
import { CardComponent } from './card/card.component';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';
import { EmojiPipe } from './pipes/emoji.pipe';
import { CardListComponent } from './card/card-list.component';

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
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LayoutComponent,
    BadgeComponent,
    CardComponent,
    CardListComponent,
    EmojiPickerComponent,
    EmojiPipe,
  ],
})
export class SharedModule {}
