import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadesAcademicasSectionComponent } from './atividades-academicas-section.component';

describe('AtividadesAcademicasSectionComponent', () => {
  let component: AtividadesAcademicasSectionComponent;
  let fixture: ComponentFixture<AtividadesAcademicasSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadesAcademicasSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadesAcademicasSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
