import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Repositorio } from 'src/app/core/models/repositorio.model';
import { Usuario } from 'src/app/core/models/Usuario.model';
import { DateCellComponent } from 'src/app/shared/grid-components/date-cell.component';

@Component({
  selector: '[resultado-linha]',
  templateUrl: './resultado-linha.component.html',
  styleUrls: ['./resultado-linha.component.scss']
})
export class ResultadoLinhaComponent implements OnInit, OnChanges {

  @Input('usuario') usuario:Usuario;
  @Input('repositorios') repositorios:Repositorio[];
  public columns: any[] = [
    { headerName: 'Nome', field: 'name', width: 250 },
    { headerName: 'Id', field: 'id'},
    { headerName: 'Atualizado em:', field: 'updated_at', cellRenderer: 'dateCell'},
    { headerName: 'Criado em:', field: 'created_at', cellRenderer: 'dateCell'},
    { headerName: 'Linguagem', field: 'language'},
  ]

  public rows: any[] = [];

  public frameworkComponents = {
    dateCell: DateCellComponent
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.repositorios.currentValue != undefined){
      this.generateRows(changes.repositorios.currentValue);
    }
  }

  private generateRows(repos: Repositorio[]): void {
      this.rows = repos.map( (repo: Repositorio) => ({ name: repo.name, id: repo.id, updated_at: repo.updated_at, created_at: repo.created_at, language: repo.language }))
  };


}
