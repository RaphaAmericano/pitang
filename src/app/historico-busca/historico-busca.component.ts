import { Component, OnInit } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { distinctUntilChanged, take, tap } from 'rxjs/operators';
import { StateService } from '../core/services/state.service';

@Component({
  selector: 'app-historico-busca',
  templateUrl: './historico-busca.component.html',
  styleUrls: ['./historico-busca.component.scss']
})
export class HistoricoBuscaComponent implements OnInit {

  public historico$: Observable<string[]>;
  public historico: any[] = [];
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.stateService.getBuscaObservable().pipe( 
      tap(val => { 
        const newValue = val.replace('+', ' ');
        const check = this.historico.find(element => element == newValue);
        console.log(check);
        if(check == undefined){
          this.historico.unshift(newValue);
        }
      } )
    ).subscribe( res => {
      if(this.historico.length >= 5){
        this.historico.pop();
      }
    } ) ;
  }

}
