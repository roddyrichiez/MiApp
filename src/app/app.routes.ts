import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
  { path: 'sumadora', loadComponent: () => import('./pages/sumadora/sumadora.page').then(m => m.SumadoraPage) },
  { path: 'traductor', loadComponent: () => import('./pages/traductor/traductor.page').then(m => m.TraductorPage) },
  { path: 'tabla', loadComponent: () => import('./pages/tabla/tabla.page').then(m => m.TablaPage) },
  { path: 'experiencia', loadComponent: () => import('./pages/experiencia/experiencia.page').then(m => m.ExperienciaPage) }
];
