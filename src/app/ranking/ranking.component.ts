import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public usuarios$: Observable<any[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.usuarios$ = this.httpService.getTrandingDevelopers().pipe(
      tap( val => console.log(val))
    );
  }

}
