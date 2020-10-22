import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AvatarImageComponent } from './grid-components/avatar-image.component';
import { UrlAnchorComponent } from './grid-components/url-anchor.component';



@NgModule({
  declarations: [],
  imports: [AgGridModule.withComponents([AvatarImageComponent, UrlAnchorComponent])],
  exports:[AgGridModule]
})
export class SharedModule { }
