import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsNovoComponent } from './hqs-novo.component';

describe('HqsNovoComponent', () => {
  let component: HqsNovoComponent;
  let fixture: ComponentFixture<HqsNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqsNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HqsNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
