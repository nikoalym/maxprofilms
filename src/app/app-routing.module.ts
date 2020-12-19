import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'/films/xclpro'},
  { path: 'films/:id', component: FilmDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
