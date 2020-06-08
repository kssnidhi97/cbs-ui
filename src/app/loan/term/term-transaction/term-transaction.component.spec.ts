import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermTransactionComponent } from './term-transaction.component';

describe('TermTransactionComponent', () => {
  let component: TermTransactionComponent;
  let fixture: ComponentFixture<TermTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
