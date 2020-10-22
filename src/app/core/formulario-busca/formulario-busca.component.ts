import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-formulario-busca',
  templateUrl: './formulario-busca.component.html',
  styleUrls: ['./formulario-busca.component.scss']
})
export class FormularioBuscaComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome:['', Validators.required]
    });

  }

  public submit(): void {
    console.log(this.formulario.value);
    if(this.formulario.valid){
     this.sendData(this.formulario.get('nome').value); 
    }
  }

  public sendData(query: string): void {
    query = query.replace(' ', '+');
    console.log(query);
    this.httpService.getUserByName(query).pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe( res => console.log(res));
  }

}
