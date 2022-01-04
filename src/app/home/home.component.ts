import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { PlayingNow } from '../models/playing_now';
import { MovieService } from '../services/movie.service';
import { loadBillboardMovies } from '../store/billboard-movies/billboard-movies.actions';

class BillboardMovieObject {
  playingNow: PlayingNow;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList: Array<Movie>;
  loading = true;
  page = 1;
  totalPages: number;
  paginatorArray: Array<number>

  constructor(
    private store: Store<{playingNow: BillboardMovieObject}>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      data['page'] && (this.page = parseInt(data['page']));
    })
    this.store.dispatch(loadBillboardMovies({page: this.page}))
    this.store.select('playingNow').subscribe((data) => {
      this.movieList = data.playingNow?.results;
      this.totalPages = data.playingNow?.total_pages;
      this.constructPaginator();
      this.loading = false; 
      }
    )
  }

  constructPaginator(){
    let _paginatorArray: Array<number> = [];
    if( this.page < this.totalPages-6 ) {
      for (let i = 0; i < 6; i++) {
        _paginatorArray.push(this.page + i)
      }
    } else {
      for (let i = 6; i >= 0; i--) {
        _paginatorArray.push(this.totalPages - i)
      }
    }
    if(!_paginatorArray.includes(NaN)) this.paginatorArray = _paginatorArray;
  }

}
