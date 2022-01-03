import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { SearchResults } from '../models/search-results.mode';
import { searchMovie } from '../store/movie-search/movie-search.actions';

class MovieResultsObject{
  searchResult: SearchResults
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  movieList: Array<Movie>;
  search: string;

  constructor(
    private store: Store<{searchResult: MovieResultsObject}>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((res) => this.search = res['query']);
    this.store.dispatch(searchMovie({query: this.search}));
    this.store.select('searchResult').subscribe((data) => {
      console.log(data)
      /* this.movieDetails = data.movieDetail;
      this.starsConfig = this.movieService.getStarsConfig(data.movieDetail?.vote_average);
      this.cast = data.cast?.cast;
      this.loading = false; */
    });
    console.log(this.store.select('searchResult'))

  }

}
