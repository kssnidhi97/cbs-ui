import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadSanctionComponent } from './lad-sanction.component';

describe('LadSanctionComponent', () => {
  let component: LadSanctionComponent;
  let fixture: ComponentFixture<LadSanctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadSanctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
