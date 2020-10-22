import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[url-anchor]',
  template: `
    <a href="{{ urlAnchor }}">
      Perfil
    </a>
  `,
  styles: [
  ]
})
export class UrlAnchorComponent {
  public urlAnchor: string;

  agInit(params: any): void {
    console.log(params);
    this.urlAnchor = params['value']
  }
  constructor() { }

}
