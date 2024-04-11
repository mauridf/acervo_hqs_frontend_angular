import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicoesDetalheComponent } from './edicoes-detalhe.component';

describe('EdicoesDetalheComponent', () => {
  let component: EdicoesDetalheComponent;
  let fixture: ComponentFixture<EdicoesDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicoesDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicoesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
