export interface ArtworkImage {
  id: number;
  image: string;
  alt_text: string;
}
export interface Artwork {
  id: number;
  title: string;
  slug: string;
  price: string;
  sold_out: boolean;
  description: string;
  created_at: string;
  hero_image: string | null;
  width_cm: string | null;
  height_cm: string | null;
  images: ArtworkImage[];
}
export interface Paginated<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
