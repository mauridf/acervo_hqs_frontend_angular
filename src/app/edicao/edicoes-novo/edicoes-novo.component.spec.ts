import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicoesNovoComponent } from './edicoes-novo.component';

describe('EdicoesNovoComponent', () => {
  let component: EdicoesNovoComponent;
  let fixture: ComponentFixture<EdicoesNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicoesNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicoesNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
