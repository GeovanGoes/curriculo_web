import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoComplementarComponent } from './formacao-complementar.component';

describe('FormacaoComplementarComponent', () => {
  let component: FormacaoComplementarComponent;
  let fixture: ComponentFixture<FormacaoComplementarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacaoComplementarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacaoComplementarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
