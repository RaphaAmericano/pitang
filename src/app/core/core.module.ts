import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AgGridModule } from 'ag-grid-angular';




@NgModule({
  imports: [
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule ){
    if(parentModule){
      throw new Error("Módulo Core já carregado. Importá-lo apenas no AppModule")
    }
  }
}
