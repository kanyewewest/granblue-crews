import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CrewSearchComponent } from './crew-search/crew-search.component';
import { CrewRoutingModule } from './crew-routing.module';
import { CardService } from '../core/services/card.service';
import { CrewService } from '../core/services/crew.service';

@NgModule({
  declarations: [CrewSearchComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, CrewRoutingModule],
  providers: [{ provide: CardService, useExisting: CrewService }],
})
export class CrewModule {}
