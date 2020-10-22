import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBuscaComponent } from './formulario-busca.component';

describe('FormularioBuscaComponent', () => {
  let component: FormularioBuscaComponent;
  let fixture: ComponentFixture<FormularioBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
