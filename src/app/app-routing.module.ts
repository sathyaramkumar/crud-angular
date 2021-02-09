import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/layout/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
    { path: 'home', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
