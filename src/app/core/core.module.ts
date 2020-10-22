import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { HttpService } from './services/http.service';




@NgModule({
  imports: [
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers:[HttpService]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule ){
    if(parentModule){
      throw new Error("Módulo Core já carregado. Importá-lo apenas no AppModule")
    }
  }
}
