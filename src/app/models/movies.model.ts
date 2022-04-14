export interface Artist {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface MovieCast {
  id: number;
  cast: Array<Artist>;
  crew: Array<Object>;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: object | null;
  budget: number;
  genres: Array<Object>;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<Object>;
  production_countries: Array<Object>;
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<Object>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type Star = 'half-full' | 'full' | 'blank';

export interface PlayingNow {
  dates: Object;
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

export interface SearchResults {
  page: number;
  results: Array<Movie>;
  total_results: number;
  total_pages: number;
}
