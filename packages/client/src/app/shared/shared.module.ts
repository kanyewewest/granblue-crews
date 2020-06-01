import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { BadgeComponent } from './badge/badge.component';
import { CardComponent } from './card/card.component';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';
import { EmojiPipe } from './pipes/emoji.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    BadgeComponent,
    CardComponent,
    EmojiPickerComponent,
    EmojiPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    BadgeComponent,
    CardComponent,
    EmojiPickerComponent,
    EmojiPipe,
  ],
})
export class SharedModule {}
