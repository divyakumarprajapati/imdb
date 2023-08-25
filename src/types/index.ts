export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  rating: number;
  length?: string;
  director?: string;
  cast?: string[];
  release_year?: number;
}
