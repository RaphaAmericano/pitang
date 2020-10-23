import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'busca'}, 
  { path: 'busca', loadChildren: () => import('./resultado-busca/resultado-busca.module').then(m => m.ResultadoBuscaModule) }, 
  { path: 'ranking', loadChildren: () => import('./ranking/ranking.module').then(m => m.RankingModule) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
