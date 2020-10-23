import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-formulario-busca',
  templateUrl: './formulario-busca.component.html',
  styleUrls: ['./formulario-busca.component.scss']
})
export class FormularioBuscaComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private stateService: StateService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome:['', Validators.required]
    });
    
  }

  public submit(): void {
    if(this.formulario.valid){
     this.sendData(this.formulario.get('nome').value); 
    }
  }

  public sendData(query: string): void {
    query = query.replace(' ', '+');
    this.stateService.subjectNewValue(query);
  }

}
