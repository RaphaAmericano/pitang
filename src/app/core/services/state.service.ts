import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private busca$Subject: ReplaySubject<string>;
  public busca$: Observable<string>; 

  constructor() {
    this.loadDataFromSession();
   }

  public start(){
    this.busca$Subject = new ReplaySubject<string>(5);
    this.busca$ = this.busca$Subject.asObservable().pipe(
      shareReplay(5),
      tap( query => this.setSessionStorage(query))
    );
  }

  public subjectNewValue(value: string){
    this.busca$Subject.next(value);
  }

  public getBuscaObservable(): Observable<string> {
    return this.busca$;
  }

  public setSessionStorage(query: string): void {
    let sessionData = this.getSessionStorage() || [];

    console.log(sessionData);
    sessionData.unshift(query);
    console.log(sessionData.length);

    if(sessionData.length > 5 ){
      sessionData.pop();
    }
    sessionStorage.setItem('querys', JSON.stringify(sessionData));
  }

  public getSessionStorage(): string[] {
    return JSON.parse(sessionStorage.getItem('querys'));
  }

  public loadDataFromSession(): void {
    // const data = this.getSessionStorage();
    // data.map( query => this.subjectNewValue(query))
  }

}
