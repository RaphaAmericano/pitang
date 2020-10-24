import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AvatarImageComponent } from './grid-components/avatar-image.component';
import { UrlAnchorComponent } from './grid-components/url-anchor.component';
import { DateCellComponent } from './grid-components/date-cell.component';



@NgModule({
  declarations: [],
  imports: [AgGridModule.withComponents([AvatarImageComponent, UrlAnchorComponent, DateCellComponent])],
  exports:[AgGridModule]
})
export class SharedModule { }
