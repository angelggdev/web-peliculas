import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path:'', 
    component: HomeComponent
  },
  {
    path: 'pelicula/:id',
    component: MovieDetailComponent
  },
  {
    path: 'cartelera/:page',
    component: HomeComponent
  },
  {
    path: 'resultados/:search',
    component: SearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
