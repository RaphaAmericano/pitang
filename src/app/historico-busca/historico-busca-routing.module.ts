import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricoBuscaComponent } from './historico-busca.component';

const routes: Routes = [
  { path: '', component: HistoricoBuscaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricoBuscaRoutingModule {
  static components = [HistoricoBuscaComponent]
 }
