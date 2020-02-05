import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTrajetoriaProfissionalComponent } from './item-trajetoria-profissional.component';

describe('ItemTrajetoriaProfissionalComponent', () => {
  let component: ItemTrajetoriaProfissionalComponent;
  let fixture: ComponentFixture<ItemTrajetoriaProfissionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTrajetoriaProfissionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTrajetoriaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
