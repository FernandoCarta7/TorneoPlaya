import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'registrar-torneo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    InputGroupModule,
    FloatLabelModule
    
  ],
  providers: [BrowserModule],
  templateUrl: './registrar-torneo.component.html',
  styleUrl: './registrar-torneo.component.css'
})
export class RegistrarTorneoComponent implements OnInit {
  
  nombreTorneo : String;
  fechaInicio : Date;
  fechaFin : Date;
  lugar : String;
  cantMaxEquipos : number;
  estados: String[] | undefined;
  estadoSelected: String | undefined;


  ngOnInit() {
    this.estados = [
      "Seleccione estado torneo",
      "INSCRIPCIONES",
      "PENDIENTE",
      "EN CURSO",
      "FINALIZADO"
    ]
  }


}
