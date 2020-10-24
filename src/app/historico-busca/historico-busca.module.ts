import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoBuscaRoutingModule } from './historico-busca-routing.module';


@NgModule({
  declarations: [HistoricoBuscaRoutingModule.components],
  imports: [
    CommonModule,
    HistoricoBuscaRoutingModule
  ]
})
export class HistoricoBuscaModule { }
