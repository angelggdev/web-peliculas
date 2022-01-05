import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieCast } from '../models/movie-cast.model';
import { MovieDetail } from '../models/movie-detail.model';
import { MovieService } from '../services/movie.service';
import { loadCast, loadMovieDetails } from '../store/movie-details/movie-details.actions';

class MovieDetailObject {
  movieDetail: MovieDetail;
  cast:MovieCast
}
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() posterPath:string;
  @Input() movieTitle:string;
  @Input() averageVote:number;
  @Input() movieId:number;
  starsConfig: Array<string>;

  constructor(
    private router: Router,
    private movieService: MovieService,
    private store: Store<{movieDetailReducer: MovieDetailObject}>,

  ) { }

  ngOnInit(): void {
    this.starsConfig = this.getStarsConfig(this.averageVote - 1);
  }

  getStarsConfig(number:number): Array<string>{
    return this.movieService.getStarsConfig(number);
  }

  //navigation to the movie details and dispatch of the store action to load the movie details and the cast members
  getMovieDetails(id:number): void{
    this.router.navigateByUrl(`/pelicula/${id}`);
    this.store.dispatch(loadMovieDetails({id: this.movieId}));
    this.store.dispatch(loadCast({id: this.movieId}));
  }

}
