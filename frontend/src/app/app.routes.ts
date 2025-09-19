import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'artworks' },
  {
    path: 'artworks',
    loadChildren: () => import('./domains/artworks/artworks.routes').then((m) => m.ARTWORK_ROUTES),
  },
];
