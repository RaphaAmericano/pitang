import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed:boolean = true;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.start();
  }

}
