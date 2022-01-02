import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { Action } from "rxjs/internal/scheduler/Action";
import { map, catchError, switchMap, mergeMap} from 'rxjs/operators';
import { MovieService } from "src/app/services/movie.service";
import { loadBillboardMovies, loadBillboardMoviesFailure, loadBillboardMoviesSuccess } from "./billboard-movies.actions";

@Injectable()
export class BillboardMoviesEffects {

    loadBillboardMovies$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadBillboardMovies),
            mergeMap(() => {
                return this.movieService.getBillboardMovies().pipe(
                map(playingNow => loadBillboardMoviesSuccess({billboardMovies: playingNow.results})),
                catchError(() => of(loadBillboardMoviesFailure()))
              )})
        )
    })

    constructor(
        private actions$: Actions,
        private movieService: MovieService
    ){}

}

