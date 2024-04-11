import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsDetalheComponent } from './hqs-detalhe.component';

describe('HqsDetalheComponent', () => {
  let component: HqsDetalheComponent;
  let fixture: ComponentFixture<HqsDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqsDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HqsDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
