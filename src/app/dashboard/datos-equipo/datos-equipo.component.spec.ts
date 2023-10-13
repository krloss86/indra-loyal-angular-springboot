import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEquipoComponent } from './datos-equipo.component';

describe('DatosEquipoComponent', () => {
  let component: DatosEquipoComponent;
  let fixture: ComponentFixture<DatosEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEquipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
