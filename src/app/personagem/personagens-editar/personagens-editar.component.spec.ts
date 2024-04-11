import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagensEditarComponent } from './personagens-editar.component';

describe('PersonagensEditarComponent', () => {
  let component: PersonagensEditarComponent;
  let fixture: ComponentFixture<PersonagensEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonagensEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonagensEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
