import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSvgComponent } from './favourite-svg.component';

describe('FavouriteComponent', () => {
  let component: FavouriteSvgComponent;
  let fixture: ComponentFixture<FavouriteSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteSvgComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
