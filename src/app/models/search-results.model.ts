import { Movie } from './movie.model';

export class SearchResults {
  page: number;
  results: Array<Movie>;
  total_results: number;
  total_pages: number;
}
