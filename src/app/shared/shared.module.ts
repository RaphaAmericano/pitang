import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [],
  imports: [AgGridModule.withComponents([])],
  exports:[AgGridModule]
})
export class SharedModule { }
