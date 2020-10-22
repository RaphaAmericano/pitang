import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RankingRoutingModule.components],
  imports: [
    CommonModule,
    RankingRoutingModule,
    SharedModule
  ]
})
export class RankingModule { }
