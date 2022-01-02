import { Movie } from './movie.model';

export class PlayingNow {
  dates: Object;
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
