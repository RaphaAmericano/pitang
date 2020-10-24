import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private busca$Subject: ReplaySubject<string>;
  public busca$: Observable<string>; 

  constructor() { }

  public start(){
    this.busca$Subject = new ReplaySubject<string>(5);
    this.busca$ = this.busca$Subject.asObservable();
  }

  public subjectNewValue(value: string){
    this.busca$Subject.next(value);
  }

  public getBuscaSubject(): ReplaySubject<string> {
    return this.busca$Subject;
  }

  public getBuscaObservable(): Observable<string> {
    return this.busca$;
  }

}
