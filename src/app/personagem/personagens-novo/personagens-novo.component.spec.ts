import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensNovoComponent } from './personagens-novo.component';

describe('PersonagensNovoComponent', () => {
  let component: PersonagensNovoComponent;
  let fixture: ComponentFixture<PersonagensNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagensNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
