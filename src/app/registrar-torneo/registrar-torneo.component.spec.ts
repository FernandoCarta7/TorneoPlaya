import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTorneoComponent } from './registrar-torneo.component';

describe('RegistrarTorneoComponent', () => {
  let component: RegistrarTorneoComponent;
  let fixture: ComponentFixture<RegistrarTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarTorneoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
