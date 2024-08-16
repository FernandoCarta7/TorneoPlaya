import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarParticipanteComponent } from './editar-participante.component';

describe('EditarParticipanteComponent', () => {
  let component: EditarParticipanteComponent;
  let fixture: ComponentFixture<EditarParticipanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarParticipanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
