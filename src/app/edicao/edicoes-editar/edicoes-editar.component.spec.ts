import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicoesEditarComponent } from './edicoes-editar.component';

describe('EdicoesEditarComponent', () => {
  let component: EdicoesEditarComponent;
  let fixture: ComponentFixture<EdicoesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicoesEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicoesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
