import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrewComponent } from './crew.component';
import { CrewSearchComponent } from './crew-search/crew-search.component';

const routes: Routes = [
  {
    path: '',
    component: CrewComponent,
    children: [
      {
        path: '',
        component: CrewSearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrewRoutingModule {}
