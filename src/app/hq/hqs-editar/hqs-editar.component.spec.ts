import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsEditarComponent } from './hqs-editar.component';

describe('HqsEditarComponent', () => {
  let component: HqsEditarComponent;
  let fixture: ComponentFixture<HqsEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqsEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HqsEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
