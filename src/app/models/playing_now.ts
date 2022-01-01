import { Movie } from './movie.model';

export class PlayingNow {
  dates: {
    maximum: number;
    minimum: number;
  };
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
