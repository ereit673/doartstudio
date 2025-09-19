import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paginated, Artwork } from '../models/artwork';

@Injectable({
  providedIn: 'root',
})
export class ArtworkApi {
  private base = 'http://127.0.0.1:8000/api';
  private httpClient: HttpClient = inject(HttpClient);

  fetchAll(page = 1) {
    return this.httpClient.get<Paginated<Artwork>>(`${this.base}/artworks/?page=${page}`);
  }

  fetchById(id: number) {
    return this.httpClient.get<Artwork>(`${this.base}/artworks/${id}`);
  }
}
