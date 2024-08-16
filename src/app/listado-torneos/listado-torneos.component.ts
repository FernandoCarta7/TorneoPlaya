import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'listado-torneos',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './listado-torneos.component.html',
  styleUrl: './listado-torneos.component.css'
})
export class ListadoTorneosComponent {
  constructor( private router : Router ){

  }

  goToRegistroTorneo(){
    this.router.navigate(['registrar-torneo']);
  }
}
