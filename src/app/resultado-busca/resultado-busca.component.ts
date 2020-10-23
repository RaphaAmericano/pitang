import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ResponseRepositorio } from '../core/models/response.repositorio.model';
import { ResponseUsuario } from '../core/models/response.usuario.model';
import { HttpService } from '../core/services/http.service';
import { StateService } from '../core/services/state.service';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.scss']
})
export class ResultadoBuscaComponent implements OnInit {

  public usuarios$: Observable<any>;

  constructor(private httpService: HttpService, private stateService: StateService ) { }

  ngOnInit(): void {
    this.stateService.getBuscaObservable().pipe(
      tap( termo => this.usuarios$ = this.httpService.getUserByName(termo).pipe(
        map( (res: ResponseUsuario) => res.items ),
        map( (items) => {
          return items.map( item => {
            this.httpService.getReposOfUser(item['login']).subscribe( repos => item.repos = repos );
            return item;
          } ) 
        }),
        tap(res => console.log(res))
      ))
    ).subscribe();

  } 
}
