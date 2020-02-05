import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAtividadeAcademicaComponent } from './item-atividade-academica.component';

describe('ItemAtividadeAcademicaComponent', () => {
  let component: ItemAtividadeAcademicaComponent;
  let fixture: ComponentFixture<ItemAtividadeAcademicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAtividadeAcademicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAtividadeAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
