import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyAgentComponent } from './pigmy-agent.component';

describe('PigmyAgentComponent', () => {
  let component: PigmyAgentComponent;
  let fixture: ComponentFixture<PigmyAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
