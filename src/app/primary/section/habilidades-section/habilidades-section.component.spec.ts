import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesSectionComponent } from './habilidades-section.component';

describe('HabilidadesSectionComponent', () => {
  let component: HabilidadesSectionComponent;
  let fixture: ComponentFixture<HabilidadesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
