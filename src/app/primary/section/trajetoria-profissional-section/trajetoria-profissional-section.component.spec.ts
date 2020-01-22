import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriaProfissionalSectionComponent } from './trajetoria-profissional-section.component';

describe('TrajetoriaProfissionalSectionComponent', () => {
  let component: TrajetoriaProfissionalSectionComponent;
  let fixture: ComponentFixture<TrajetoriaProfissionalSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajetoriaProfissionalSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoriaProfissionalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
