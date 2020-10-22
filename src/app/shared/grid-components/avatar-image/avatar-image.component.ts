import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[avatar-image]',
  template: `
    <img src="{{ imgUrl}}">
  `,
  styles: [
  ]
})
export class AvatarImageComponent  {

  imgUrl: string;

  agInit(params: string): void {
    this.imgUrl = params['value'];
  }

  constructor() { }

  
}
