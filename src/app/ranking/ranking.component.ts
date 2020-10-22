import { Component, OnInit } from '@angular/core';

import { tap } from 'rxjs/operators';
import { Usuario } from '../core/models/Usuario.model';
import { HttpService } from '../core/services/http.service';
import { AvatarImageComponent } from '../shared/grid-components/avatar-image.component';
import { UrlAnchorComponent } from '../shared/grid-components/url-anchor.component';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public usuarios: any;

  public columns:any[] = [
    { headerName: 'Nome', field: 'name'},
    { headerName: 'Usuário', field: 'username'},
    { headerName: 'Perfil', field: 'url', cellRenderer: 'userProfileUrlAnchor'},
    { headerName: 'Avatar', field: 'avatar', cellRenderer: 'avatarImageComponent'},
  ];

  public rows:any[] = []

  public frameworkComponents = {
    avatarImageComponent: AvatarImageComponent,
    userProfileUrlAnchor: UrlAnchorComponent
  }

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getTrandingDevelopers().pipe(
      tap( (usuarios: Usuario[]) => { 
        this.rows = this.rowData(usuarios);
      })
    ).subscribe( usuarios => this.usuarios = usuarios);
  }

  public rowData(usuarios: Usuario[]): object[] { 
    return usuarios.map( (usuario: Usuario) =>  ({ name: usuario.name, username: usuario.username, url: usuario.url, avatar: usuario.avatar }));
  }

}
