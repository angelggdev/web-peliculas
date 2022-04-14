import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import {
  loadBillboardMovies,
  loadBillboardMoviesFailure,
  loadBillboardMoviesSuccess,
} from './billboard-movies.actions';

@Injectable()
export class BillboardMoviesEffects {
  
  loadBillboardMovies$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadBillboardMovies),
      mergeMap(({ page }) =>
        this.movieService.getBillboardMovies(page).pipe(
          map((playingNow) =>
            loadBillboardMoviesSuccess({ playingNow: playingNow })
          ),
          catchError(() => of(loadBillboardMoviesFailure()))
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private movieService: MovieService) {}
}
