import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultadoBuscaComponent } from './resultado-busca.component';

const routes: Routes = [
  { path: '', component: ResultadoBuscaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadoBuscaRoutingModule { 
  static components = [ResultadoBuscaComponent]
}
