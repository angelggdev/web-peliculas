import { Artist } from './artist.model';

export class MovieCast {
  id: number;
  cast: Array<Artist>;
  crew: Array<Object>;
}
