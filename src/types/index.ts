export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  length?: string;
  director?: string;
  cast?: string[];
  release_year?: number;
}
