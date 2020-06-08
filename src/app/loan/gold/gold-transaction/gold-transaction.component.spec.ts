import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldTransactionComponent } from './gold-transaction.component';

describe('GoldTransactionComponent', () => {
  let component: GoldTransactionComponent;
  let fixture: ComponentFixture<GoldTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
