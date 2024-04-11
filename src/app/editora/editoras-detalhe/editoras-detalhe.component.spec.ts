import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorasDetalheComponent } from './editoras-detalhe.component';

describe('EditorasDetalheComponent', () => {
  let component: EditorasDetalheComponent;
  let fixture: ComponentFixture<EditorasDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorasDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorasDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
