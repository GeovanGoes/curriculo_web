import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoSectionComponent } from './formacao-section.component';

describe('FormacaoSectionComponent', () => {
  let component: FormacaoSectionComponent;
  let fixture: ComponentFixture<FormacaoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacaoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacaoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
