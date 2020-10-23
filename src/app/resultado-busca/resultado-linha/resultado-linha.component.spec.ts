import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoLinhaComponent } from './resultado-linha.component';

describe('ResultadoLinhaComponent', () => {
  let component: ResultadoLinhaComponent;
  let fixture: ComponentFixture<ResultadoLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoLinhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
