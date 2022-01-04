import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Artist } from '../models/artist.model';
import { MovieCast } from '../models/movie-cast.model';
import { MovieDetail } from '../models/movie-detail.model';
import { MovieService } from '../services/movie.service';
import { loadCast, loadMovieDetails } from '../store/movie-details/movie-details.actions';
import {Location} from '@angular/common';

class MovieDetailObject {
  movieDetail: MovieDetail;
  cast:MovieCast
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetails: MovieDetail;
  movieId: number;
  loading = true;
  starsConfig: Array<string>;
  cast: Array<Artist>;

  constructor(
    private store: Store<{movieDetailReducer: MovieDetailObject}>,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((res) => this.movieId = parseInt(res['id']));
    this.store.dispatch(loadMovieDetails({id: this.movieId}));
    this.store.dispatch(loadCast({id: this.movieId}));
    this.store.select('movieDetailReducer').subscribe((data) => {
      console.log(data)
      this.movieDetails = data.movieDetail;
      this.starsConfig = this.movieService.getStarsConfig(data.movieDetail?.vote_average);
      this.cast = data.cast?.cast;
      this.loading = false;
    });

  }

  goBack(){
    this.location.back();
  }

}
