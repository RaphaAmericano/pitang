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
    { headerName: 'Avatar', field: 'avatar', width: 100, suppressSizeToFit: true, cellRenderer: 'avatarImageComponent'},
    { headerName: 'Nome', field: 'name', width: 300, suppressSizeToFit: true },
    { headerName: 'Usuário', field: 'username', width: 300, suppressSizeToFit: true},
    { headerName: 'Perfil', field: 'url', width: 200, suppressSizeToFit: true, cellRenderer: 'userProfileUrlAnchor'},
  ];

  public rows:any[] = []

  public defaultColDef:object = { resizable: true };

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
    return usuarios.map( (usuario: Usuario) =>  ({ avatar: usuario.avatar, name: usuario.name, username: usuario.username, url: usuario.url  }));
  }

}
