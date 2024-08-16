import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTorneosComponent } from './listado-torneos.component';

describe('ListadoTorneosComponent', () => {
  let component: ListadoTorneosComponent;
  let fixture: ComponentFixture<ListadoTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoTorneosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
