import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyTransactionComponent } from './pigmy-transaction.component';

describe('PigmyTransactionComponent', () => {
  let component: PigmyTransactionComponent;
  let fixture: ComponentFixture<PigmyTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
