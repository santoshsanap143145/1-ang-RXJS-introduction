import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameOneComponent } from './username-one.component';

describe('UsernameOneComponent', () => {
  let component: UsernameOneComponent;
  let fixture: ComponentFixture<UsernameOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernameOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
