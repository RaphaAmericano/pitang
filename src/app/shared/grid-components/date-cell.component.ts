import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '[date-cell]',
  template: `
    {{ data }}
  `,
  styles: [
  ]
})
export class DateCellComponent {

  data: string;

  agInit(params: any ){
    this.data = this.datePipe.transform(params.value, 'dd-MM-yyyy');
  }  

  constructor(private datePipe: DatePipe) { }

}
