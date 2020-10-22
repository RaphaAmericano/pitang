import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AvatarImageComponent } from './grid-components/avatar-image/avatar-image.component';



@NgModule({
  declarations: [],
  imports: [AgGridModule.withComponents([AvatarImageComponent])],
  exports:[AgGridModule]
})
export class SharedModule { }
