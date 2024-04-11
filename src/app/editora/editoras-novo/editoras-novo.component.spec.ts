import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorasNovoComponent } from './editoras-novo.component';

describe('EditorasNovoComponent', () => {
  let component: EditorasNovoComponent;
  let fixture: ComponentFixture<EditorasNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorasNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorasNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
