import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CrewRoutingModule } from './crew-routing.module';
import { CardService } from '../core/services/card.service';
import { CrewService } from '../core/services/crew.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, CrewRoutingModule],
  providers: [{ provide: CardService, useExisting: CrewService }],
})
export class CrewModule {}
