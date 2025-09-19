import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkList } from './artwork-list';

describe('ArtworkList', () => {
  let component: ArtworkList;
  let fixture: ComponentFixture<ArtworkList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
