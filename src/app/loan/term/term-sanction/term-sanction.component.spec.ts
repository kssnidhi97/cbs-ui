import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermSanctionComponent } from './term-sanction.component';

describe('TermSanctionComponent', () => {
  let component: TermSanctionComponent;
  let fixture: ComponentFixture<TermSanctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermSanctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
