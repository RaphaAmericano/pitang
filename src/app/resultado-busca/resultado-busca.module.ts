import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoBuscaRoutingModule } from './resultado-busca-routing.module';
import { ResultadoBuscaComponent } from './resultado-busca.component';


@NgModule({
  declarations: [ResultadoBuscaRoutingModule.components],
  imports: [
    CommonModule,
    ResultadoBuscaRoutingModule
  ]
})
export class ResultadoBuscaModule { }
