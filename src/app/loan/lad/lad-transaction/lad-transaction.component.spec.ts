import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadTransactionComponent } from './lad-transaction.component';

describe('LadTransactionComponent', () => {
  let component: LadTransactionComponent;
  let fixture: ComponentFixture<LadTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
