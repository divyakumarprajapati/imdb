export interface Movie {
  title: string;
  description: string;
  image_url: string;
  rating: number;
  length?: string;
  director?: string;
  cast?: string[];
  release_year?: number;
}
