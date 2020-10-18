import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'mentions-legales',
    loadChildren: () => import('./mentions/mentions.module').then(m => m.MentionsModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
