import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import {
  searchMovie,
  searchMovieFailure,
  searchMovieSuccess,
} from './movie-search.actions';

@Injectable()
export class MovieSearchEffects {
  searchMovie$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchMovie),
      mergeMap(({ query, page }) => {
        return this.movieService.searchMovie(query, page).pipe(
          map((searchResult) => searchMovieSuccess({ searchResult })),
          catchError(() => of(searchMovieFailure()))
        );
      })
    );
  });

  constructor(private actions$: Actions, private movieService: MovieService) {}
}
