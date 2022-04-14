import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import {
  loadCast,
  loadCastFailure,
  loadCastSuccess,
  loadMovieDetails,
  loadMovieDetailsFailure,
  loadMovieDetailsSuccess,
} from './movie-details.actions';

@Injectable()
export class MovieDetailsEffects {
  
  loadMovieDetails$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadMovieDetails),
      mergeMap(({ id }) => 
        this.movieService.getMovieDetails(id).pipe(
          map((movieDetail) => loadMovieDetailsSuccess({ movieDetail })),
          catchError(() => of(loadMovieDetailsFailure()))
        ),
      ),
    ),
  );

  loadCastMembers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCast),
      mergeMap(({ id }) => 
        this.movieService.getCast(id).pipe(
          map((cast) => loadCastSuccess({ cast })),
          catchError(() => of(loadCastFailure()))
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}
}
