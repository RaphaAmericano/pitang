import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoBuscaRoutingModule } from './resultado-busca-routing.module';


@NgModule({
  declarations: [ResultadoBuscaRoutingModule.components],
  imports: [
    CommonModule,
    ResultadoBuscaRoutingModule
  ]
})
export class ResultadoBuscaModule { }
