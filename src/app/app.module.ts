import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BillboardComponent } from './home/billboard/billboard.component';
import { HomeComponent } from './home/home.component';
import { BillboardMoviesEffects } from './store/billboard-movies/billboard-movies.effects';
import { StoreModule } from '@ngrx/store';
import { billboardMoviesReducer } from './store/billboard-movies/billboard-movies.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieListComponent,
    MovieComponent,
    MovieDetailComponent,
    BillboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([BillboardMoviesEffects]),
    StoreModule.forRoot({billboardMovies: billboardMoviesReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
