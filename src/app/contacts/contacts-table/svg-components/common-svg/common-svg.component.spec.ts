import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSvgComponent } from './common-svg.component';

describe('CommonSvgComponent', () => {
  let component: CommonSvgComponent;
  let fixture: ComponentFixture<CommonSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonSvgComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
