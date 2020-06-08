import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendIssueComponent } from './dividend-issue.component';

describe('DividendIssueComponent', () => {
  let component: DividendIssueComponent;
  let fixture: ComponentFixture<DividendIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
