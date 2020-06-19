import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CrewRoutingModule } from './crew-routing.module';
import { CardService } from '../core/services/card.service';
import { CrewService } from '../core/services/crew.service';
import { CrewFilterComponent } from './crew-filter/crew-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CrewFilterComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, CrewRoutingModule],
  providers: [{ provide: CardService, useExisting: CrewService }],
  entryComponents: [CrewFilterComponent],
})
export class CrewModule {}
