import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldSanctionComponent } from './gold-sanction.component';

describe('GoldSanctionComponent', () => {
  let component: GoldSanctionComponent;
  let fixture: ComponentFixture<GoldSanctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldSanctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
