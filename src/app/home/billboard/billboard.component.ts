import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { loadBillboardMovies, loadBillboardMoviesSuccess } from 'src/app/store/billboard-movies/billboard-movies.actions';

export class BillboardMovieObject {
  billboardMovies: Array<Movie>;
}
@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss']
})
export class BillboardComponent implements OnInit {

  movieList$: Array<Movie>;
  loading = true;

  constructor(
    private movieService: MovieService,
    private store: Store<{billboardMovies: BillboardMovieObject}>
  ) { 
    
  }

  ngOnInit(): void {
    this.store.dispatch(loadBillboardMovies())
    this.store.select('billboardMovies').subscribe((data) => {
      this.movieList$ = data.billboardMovies;
      this.loading = false;
    })
    

  }

}
