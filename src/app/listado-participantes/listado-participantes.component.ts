import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { Torneo } from '../clases/Torneo';
import { Jugador } from '../clases/Jugador';
import { JugadorServicio } from '../servicios/JugadorServicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'listado-participantes',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './listado-participantes.component.html',
  styleUrl: './listado-participantes.component.css'
})
export class ListadoParticipantesComponent {
  
  jugadores : Jugador[];

  constructor(private jugadorServicio : JugadorServicio , private route : Router ){}

  ngOnInit(){
    this.getJugadores();
  }

  getJugadores(){
    this.jugadorServicio.getJugadores().subscribe((
      datos => {
        this.jugadores = datos;
        console.log('JUGADORES');
      }
    ))
  }
}
