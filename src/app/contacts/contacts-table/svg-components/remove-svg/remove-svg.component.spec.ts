import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSvgComponent } from './remove-svg.component';

describe('RemoveSvgComponent', () => {
  let component: RemoveSvgComponent;
  let fixture: ComponentFixture<RemoveSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveSvgComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
