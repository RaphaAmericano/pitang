import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ResultadoBuscaRoutingModule } from './resultado-busca-routing.module';
import { ResultadoLinhaComponent } from './resultado-linha/resultado-linha.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ResultadoBuscaRoutingModule.components, ResultadoLinhaComponent],
  imports: [
    CommonModule,
    ResultadoBuscaRoutingModule, 
    SharedModule
  ],
  providers:[DatePipe]
})
export class ResultadoBuscaModule { }
