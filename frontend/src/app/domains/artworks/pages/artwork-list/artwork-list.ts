import { Component, inject, OnInit } from '@angular/core';
import { ArtworkStore } from '../../stores/artwork-store';

@Component({
  selector: 'app-artwork-list',
  imports: [],
  templateUrl: './artwork-list.html',
  styleUrl: './artwork-list.scss',
})
export class ArtworkList implements OnInit {
  public artworkStore: ArtworkStore = inject(ArtworkStore);

  ngOnInit(): void {
    this.artworkStore.loadMoreArtworks();
  }

  loadMore(): void {
    this.artworkStore.loadMoreArtworks();
  }
}
