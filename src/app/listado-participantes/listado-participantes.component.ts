import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { Torneo } from '../clases/Torneo';

@Component({
  selector: 'listado-participantes',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './listado-participantes.component.html',
  styleUrl: './listado-participantes.component.css'
})
export class ListadoParticipantesComponent {
  torneo : Torneo [];
  ngOnInit(){

    

    
  }
}
