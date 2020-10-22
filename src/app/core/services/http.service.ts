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
    name = name.replace(' ', '+');
    return this.http.get(`${environment.API}/search/users?q=${name}`).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error: any): Observable<any> {
    console.log("Erro: ", error);
    return throwError(error);
  }

}
