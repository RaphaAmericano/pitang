import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private busca$Subject: ReplaySubject<string>;
  public busca$: Observable<string>; 

  constructor() {
    this.start()
  }

  public start(){
    this.busca$Subject = new ReplaySubject<string>(5);
    this.busca$ = this.busca$Subject.asObservable().pipe(
      tap( query => this.setSessionStorage(query))
    );
    this.loadDataFromSession();
  }

  public subjectNewValue(value: string){
    this.busca$Subject.next(value);
  }

  public getBuscaObservable(): Observable<string> {
    return this.busca$;
  }

  public setSessionStorage(query: string): void {
    let sessionData = this.getSessionStorage() || [];
    sessionData.unshift(query);
    sessionData = sessionData.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    if(sessionData.length > 5 ){
      sessionData.pop();
    }
    sessionStorage.setItem('querys', JSON.stringify(sessionData));
  }

  public getSessionStorage(): string[] {
    return JSON.parse(sessionStorage.getItem('querys'));
  }

  public loadDataFromSession(): void {
    const dataSession = this.getSessionStorage();
    dataSession.map( query => this.subjectNewValue(query));
  }

}
