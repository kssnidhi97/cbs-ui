import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PigmyIntegrationComponent } from './pigmy-integration.component';

describe('PigmyIntegrationComponent', () => {
  let component: PigmyIntegrationComponent;
  let fixture: ComponentFixture<PigmyIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PigmyIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PigmyIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
