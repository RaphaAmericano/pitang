import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { FormularioBuscaComponent } from './formulario-busca/formulario-busca.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  imports: [
    HttpClientModule,
    NgbNavModule,
    NgbCollapseModule,
    ReactiveFormsModule
  ],
  exports:[FormularioBuscaComponent, NavbarComponent],
  providers:[HttpService],
  declarations: [FormularioBuscaComponent, NavbarComponent]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule ){
    if(parentModule){
      throw new Error("Módulo Core já carregado. Importá-lo apenas no AppModule")
    }
  }
}
