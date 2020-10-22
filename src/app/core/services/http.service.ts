import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  



  public getUserByName(name: string ): Observable<any>{
    return this.http.get(`${environment.API}search/users?q=${name}`).pipe(
      catchError(this.handleError)
    )
  }

  // API for do ar, hoje dia 22/10
  // https://github-trending-api.now.sh/repositories?since=today
  // Por isso usarei a funcionalidade de mock da propria API para mostrar dados no front-end

  public getTrandingDevelopers(): Observable<any> {
    return this.http.get(`${environment.API_TRANDINGS}developers`).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: any): Observable<any> {
    console.log("Erro: ", error);
    return throwError(error);
  }

}
