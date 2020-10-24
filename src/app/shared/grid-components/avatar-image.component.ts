import { Component } from '@angular/core';

@Component({
  selector: '[avatar-image]',
  template: `
    <img src="{{ imgUrl }}">
  `,
  styles: [`
  img {
    width: 32px;
    height: 32px;
    }
  `
  ]
})
export class AvatarImageComponent  {

  imgUrl: string;

  agInit(params: any): void {
    this.imgUrl = params['value'];
  }

  constructor() { }

}
