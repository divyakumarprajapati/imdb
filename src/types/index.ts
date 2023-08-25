export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  runtime?: string;
  director?: string;
  cast?: string[];
  release_date?: number;
}
