import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [MenubarModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  items: MenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['inicio'])
        }
      },
      {
        label: 'Torneos',
        icon: 'pi pi-trophy',
        command: () => {
          this.router.navigate(['listado-torneos'])
        }
      },
      {
        label: 'Equipos',
        icon: 'pi pi-list',
        command: () => {
          this.router.navigate(['listado-equipos'])
        }
      },
      {
        label: 'Participantes',
        icon: 'pi pi-users',
        command: () => {
          this.router.navigate(['listado-participantes'])
        }
      }
    ]
  }

}
