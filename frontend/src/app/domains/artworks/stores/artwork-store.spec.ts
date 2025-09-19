import { TestBed } from '@angular/core/testing';

import { ArtworkStore } from './artwork-store';

describe('ArtworkStore', () => {
  let service: ArtworkStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtworkStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
