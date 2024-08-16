import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarEquipoComponent } from './registrar-equipo/registrar-equipo.component';
import { RegistrarParticipanteComponent } from './registrar-participante/registrar-participante.component';
import { RegistrarTorneoComponent } from './registrar-torneo/registrar-torneo.component';
import { EditarEquipoComponent } from './editar-equipo/editar-equipo.component';
import { EditarParticipanteComponent } from './editar-participante/editar-participante.component';
import { ListadoEquiposComponent } from './listado-equipos/listado-equipos.component';
import { ListadoTorneosComponent } from './listado-torneos/listado-torneos.component';
import { ListadoParticipantesComponent } from './listado-participantes/listado-participantes.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent , title:'INICIO'},
    {path: 'registrar-equipo', component: RegistrarEquipoComponent, title:'REGISTRO PACIENTE'},
    {path: 'registrar-participante', component: RegistrarParticipanteComponent, title:'REGISTRAR PARTICIPANTE'},
    {path: 'registrar-torneo', component: RegistrarTorneoComponent, title:'REGISTRAR TORNEO'},
    {path: 'editar-torneo', component: EditarEquipoComponent, title:'EDITAR EQUIPO'},
    {path: 'editar-particapante', component: EditarParticipanteComponent, title:'EDITAR PARTICAPANTE'},
    {path: 'editar-equipo', component: EditarEquipoComponent, title:'EDITAR EQUIPO'},
    {path: 'listado-equipos', component: ListadoEquiposComponent, title:'LISTADO EQUIPO'},
    {path: 'listado-torneos', component: ListadoTorneosComponent, title:'LISTADO DE TORNEOS'},
    {path: 'listado-participantes', component: ListadoParticipantesComponent, title:'LISTADO DE PARTICIPANTES'},
    {path: '', redirectTo:'inicio', pathMatch: 'full'}
    
];