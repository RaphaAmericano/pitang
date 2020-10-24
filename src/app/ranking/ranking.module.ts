import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
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
