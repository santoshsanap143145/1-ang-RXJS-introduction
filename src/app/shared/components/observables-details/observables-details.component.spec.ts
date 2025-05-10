import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesDetailsComponent } from './observables-details.component';

describe('ObservablesDetailsComponent', () => {
  let component: ObservablesDetailsComponent;
  let fixture: ComponentFixture<ObservablesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservablesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
