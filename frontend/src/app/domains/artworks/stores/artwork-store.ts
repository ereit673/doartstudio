import { inject, Injectable, signal } from '@angular/core';
import { ArtworkApi } from '../services/artwork-api';
import { Artwork } from '../models/artwork';

@Injectable({
  providedIn: 'root',
})
export class ArtworkStore {
  private artworkApi: ArtworkApi = inject(ArtworkApi);
  items = signal<Artwork[]>([]);
  loading = signal(false);
  nextPage = signal<number | null>(1);

  loadMoreArtworks() {
    const page = this.nextPage();
    if (!page) {
      return;
    }
    this.loading.set(true);
    this.artworkApi.fetchAll(page).subscribe({
      next: (res) => {
        this.items.update((curr) => [...curr, ...res.results]);
        this.nextPage.set(res.next ? page + 1 : null);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
