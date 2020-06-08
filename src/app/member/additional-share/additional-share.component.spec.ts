import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalShareComponent } from './additional-share.component';

describe('AdditionalShareComponent', () => {
  let component: AdditionalShareComponent;
  let fixture: ComponentFixture<AdditionalShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
