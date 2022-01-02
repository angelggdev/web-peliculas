import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';
import { loadBillboardMovies } from '../store/billboard-movies/billboard-movies.actions';

class BillboardMovieObject {
  billboardMovies: Array<Movie>;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList$: Array<Movie>;
  loading = true;

  constructor(
    private movieService: MovieService,
    private store: Store<{billboardMovies: BillboardMovieObject}> 
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadBillboardMovies())
    this.store.select('billboardMovies').subscribe((data) => {
      this.movieList$ = data.billboardMovies;
      this.loading = false;
    })
  }

}
