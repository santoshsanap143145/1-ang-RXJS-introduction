import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectObservableTypeComponent } from './subject-observable-type.component';

describe('SubjectObservableTypeComponent', () => {
  let component: SubjectObservableTypeComponent;
  let fixture: ComponentFixture<SubjectObservableTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectObservableTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectObservableTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
