import { TestBed } from '@angular/core/testing';

import { ArtworkApi } from './artwork-api';

describe('ArtworkApi', () => {
  let service: ArtworkApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtworkApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
