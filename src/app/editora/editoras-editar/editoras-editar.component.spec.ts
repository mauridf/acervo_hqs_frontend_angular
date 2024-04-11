import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorasEditarComponent } from './editoras-editar.component';

describe('EditorasEditarComponent', () => {
  let component: EditorasEditarComponent;
  let fixture: ComponentFixture<EditorasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorasEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
