import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkDetaill } from './artwork-detaill';

describe('ArtworkDetaill', () => {
  let component: ArtworkDetaill;
  let fixture: ComponentFixture<ArtworkDetaill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkDetaill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkDetaill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
