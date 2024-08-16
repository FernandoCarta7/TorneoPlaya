import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarParticipanteComponent } from './registrar-participante.component';

describe('RegistrarParticipanteComponent', () => {
  let component: RegistrarParticipanteComponent;
  let fixture: ComponentFixture<RegistrarParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarParticipanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
