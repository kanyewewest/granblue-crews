import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'crews', pathMatch: 'full' },
  {
    path: 'crews',
    loadChildren: () => import('./crew/crew.module').then(m => m.CrewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
