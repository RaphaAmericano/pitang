import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoBuscaComponent } from './historico-busca.component';

describe('HistoricoBuscaComponent', () => {
  let component: HistoricoBuscaComponent;
  let fixture: ComponentFixture<HistoricoBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
