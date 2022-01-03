import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieListComponent } from './home/movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { BillboardComponent } from './home/billboard/billboard.component';
import { HomeComponent } from './home/home.component';
import { BillboardMoviesEffects } from './store/billboard-movies/billboard-movies.effects';
import { StoreModule } from '@ngrx/store';
import { billboardMoviesReducer } from './store/billboard-movies/billboard-movies.reducer';
import { movieDetailReducer } from './store/moovie-details/movie-details.reducer';
import { MovieDetailsEffects } from './store/moovie-details/movie-details.effects';
import { CastMemberComponent } from './movie-detail/cast-member/cast-member.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovieListComponent,
    MovieComponent,
    MovieDetailComponent,
    BillboardComponent,
    HomeComponent,
    CastMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([BillboardMoviesEffects, MovieDetailsEffects]),
    StoreModule.forRoot({
      playingNow: billboardMoviesReducer, 
      movieDetailReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
