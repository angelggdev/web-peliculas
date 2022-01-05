import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SearchResults } from '../models/search-results.mode';
import { searchMovie } from '../store/movie-search/movie-search.actions';

class MovieResultsObject {
  searchResult: SearchResults;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  userInput: string;

  constructor(
    private router: Router,
    private store: Store<{ searchResult: MovieResultsObject }>
  ) {}

  ngOnInit(): void {}

  //function to click on the logo and navigate to the main page
  goHome(): void {
    this.router.navigateByUrl('/');
  }

  //on submit the app navigates to the search results and dispatches the search movie action from the store
  onSubmit() {
    if(this.userInput){
      this.router.navigateByUrl(`/resultados/${this.userInput}/1`);
      this.store.dispatch(searchMovie({ query: this.userInput, page: 1 }));
    }
  }
}
